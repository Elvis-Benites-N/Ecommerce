import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/asyncMock';
import ItemDetail from '../pages/itemDetails';
import Layout  from '../components/Layout/Layout';
import Loader from '../components/Loader/ScaleLoader';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = (productId) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const foundProduct = products.find(product => product.id === parseInt(productId));
          resolve(foundProduct);
        }, 2000);
      });
    };

    const timer = setTimeout(() => {
      setError(true); 
    }, 2500);

    fetchProduct(id).then(data => {
      clearTimeout(timer); 
      setProduct(data);
    });
  }, [id]);

  if (error) {
    return <div>Error: No se pudo cargar el producto</div>;
  }

  if (!product) {
    return <Loader />;
  }

  return <Layout title={"Tu mejor compra"}>
    <ItemDetail product={product} navigate={navigate} />;
  </Layout>
};

export default ItemDetailContainer;
