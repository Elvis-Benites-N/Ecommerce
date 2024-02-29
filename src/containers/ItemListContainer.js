import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import products from '../data/asyncMock';
import ItemList from '../components/Products/ItemList'
import Layout from '../components/Layout/Layout';
import '../styles/products/products.css'
import CategorySelect from '../components/Select/CategorySelect'
import { ScaleLoader } from 'react-spinners';
import Loader from '../components/Loader/ScaleLoader'

const ItemListContainer = ({ title }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category ? category : 'Todos');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
    };

    fetchProducts().then((data) => {
      setProductList(data);
      setIsLoading(false);
    });
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event);
    navigate(`/products/categoria/${event}`);
  };

  return (
    <Layout title={'Los mejores productos'}>
      <div className="container">
        <h1 className="color-secondary">{title}</h1>
        <CategorySelect selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
        {isLoading ? (  
           <Loader />
        ) : (
          <ItemList
            products={productList.filter(
              (product) => selectedCategory === 'Todos' || product.categoria === selectedCategory
            )}
          />
        )}
      </div>
    </Layout>
  );
};

export default ItemListContainer;