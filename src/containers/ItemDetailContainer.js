import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/asyncMock';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = (id) => {
      return new Promise(resolve => {
        setTimeout(() => {
          const foundProduct = products.find(product => product.id === id);
          resolve(foundProduct);
        }, 2000); 
      });
    };

    fetchProduct(productId).then(data => {
      setProduct(data);
    });
  }, [productId]);

  if (!product) {
    return <div>Cargando producto...</div>; 
  }

  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
    </div>
  );
};

export default ItemDetailContainer;
