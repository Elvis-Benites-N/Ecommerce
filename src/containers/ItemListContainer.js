import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import ItemList from '../components/Products/ItemList';
import Loader from '../components/Loader/ScaleLoader';
import CategorySelect from '../components/Select/CategorySelect';
import { firestore } from '../config/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ title }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(category || 'Todos');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const querySnapshot = await getDocs(collection(firestore, "products"));
        const productsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductList(productsList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event);
    navigate(`/products/categoria/${event}`);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Layout title={'Los mejores productos'}>
      <div className="container">
        <h1 className="color-secondary">{title}</h1>
        <CategorySelect selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
        <ItemList
          products={productList.filter(
            (product) => selectedCategory === 'Todos' || product.categoria === selectedCategory
          )}
        />
      </div>
    </Layout>
  );
};

export default ItemListContainer;
