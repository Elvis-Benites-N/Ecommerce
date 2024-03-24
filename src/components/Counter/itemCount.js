import React, { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import '../../styles/products/productsDetails.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className='quatity-container'>
      <p>CANTIDAD:</p>
      <div className="quantity-buttons">
        <button onClick={handleDecrement}><FiMinus /></button>
        <p>{count}</p>
        <button onClick={handleIncrement}><FiPlus /></button>
      </div>
      <button className="button-store" onClick={() => onAdd(count)}>
        <p className='cart-add'>Agregar al carrito</p>
        <FaCheck />
      </button>
    </div>
  );
};

export default ItemCount;
