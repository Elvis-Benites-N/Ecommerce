import React from 'react';
import Item from '../../pages/Item';
import '../../styles/products/products.css'

const ItemList = ({ products }) => {
  return (
    <div className='item-list'>
      {products.map(product => (
        <Item
          key={product.id}
          {...product}
        />
      ))}
    </div>
  );
};

export default ItemList;