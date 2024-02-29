import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { FiArrowLeft, FiMinus, FiPlus } from 'react-icons/fi';
import '../styles/products/productsDetails.css';

const ItemDetail = ({ product, navigate }) => {
  const precioAntes = product.precio + 100;
  const [cantidad, setCantidad] = useState(1);
  const aumentarCantidad = () => {
    setCantidad(cantidad + 1);
  };
  const disminuirCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };
  return (
    <div className="item-detail-container">
      <div className="left-column">
        <img src={product.img} alt={product.nombre} className="product-image" />
      </div>
      <div className="right-column">
        <div className="category">
          <p>{product.categoria}</p>
          <div className="category-border"></div>
        </div>
        <h3 className='prices'>{product.nombre}</h3>
        <h4 className='color-secondary'> PRECIO WEB</h4>
        <div className="price-container">
          <p className='price'>S/. {product.precio}</p>
          <p className='price-right color-secondary'><span style={{ textDecoration: 'line-through' }}>ANTES S/. {precioAntes}</span></p>
        </div>
        <p className='color-secondary'>INVERSIONES BENITES' S.A.C. RUC: N°215898765465</p>
        <div className='quatity-container'>
          <p>CANTIDAD:</p>
          <div className="quantity-buttons">
            <button onClick={disminuirCantidad}><FiMinus /></button>
            <p>{cantidad}</p>
            <button onClick={aumentarCantidad}><FiPlus /></button>
          </div>
        </div>
        <p className='color-secondary'>{product.descripcion}</p>
        <p>Solo queda {product.stock} en stock</p>
        <div className='container-buttons'>

        <button className="button-back" onClick={() => navigate('/products')}>  <FiArrowLeft />
          <p>Volver</p>
        </button>
        <button className="button-store" onClick={() => navigate('/store')}>  
        <p>Agregar al carrito</p>
        <FaCheck/>
          
        </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;