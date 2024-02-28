import React, { useEffect, useState } from 'react';
import products from '../data/asyncMock';
import ItemList from '../components/Products/ItemList'
import Layout  from '../components/Layout/Layout';

const ItemListContainer = ({ title }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(products);
        }, 2000);
      });
    };

    fetchProducts().then(data => {
      setProductList(data);
    });
  }, []);

  return (
    <Layout title={"Los mejores productos"}> 
      <div className="container text-center" style={{ minHeight: "75vh" }}>
        <h1>{title}</h1> 
        <ItemList products={productList} /> 
      </div>
    </Layout>
  );
};

export default ItemListContainer;