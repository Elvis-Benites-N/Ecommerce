import React from 'react';
import '../styles/products/productsCards.css'
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Item = ({ id, nombre, descripcion, categoria, precio, stock, img }) => {
  const navigate = useNavigate();

  const handleEyeClick = () => {
    navigate(`/products/${id}`); 
  };

  return (
    <div className='item'>
      <div id="category">{categoria}</div>
      <div id="name">{nombre}</div>
      <div id="details">
        <div id="image"><img src={img} alt={nombre} /></div>
        <div id="info">
          <div className="price">Precio: ${precio}</div>
          <div id="description">{descripcion}</div>
        </div>
      </div>
      <div id="more">
        <div id="stock">Stock: {stock}</div>
        <button id="eye-button" onClick={handleEyeClick}> 
          <FaEye />
        </button>
      </div>
    </div>
  );
};

export default Item;
