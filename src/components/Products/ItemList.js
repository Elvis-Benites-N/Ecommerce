import React from 'react';
import Item from '../../pages/Item';

const ItemList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <Item
          key={product.id}
          nombre={product.nombre}
          descripcion={product.descripcion}
          categoria={product.categoria}
          precio={product.precio}
          stock={product.stock}
          img={product.img}
        />
      ))}
    </div>
  );
};

export default ItemList;