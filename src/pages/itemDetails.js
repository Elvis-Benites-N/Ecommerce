import React, { useState, useContext } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import ItemCount from '../components/Counter/itemCount';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const precioAntes = product.precio + 100;
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();

  const onAdd = (quantity) => {
    console.log(`Has agregado ${quantity} unidad(es) de ${product.nombre} al carrito.`);
    setIsAddedToCart(true);
    addToCart({ ...product, quantity });
    Swal.fire({
      title: 'Felicidades!',
      text: `Agregaste ${quantity} item(s) al carrito.`,
      icon: 'success',
      timer: 1800,
      showConfirmButton: false
    });
  };

  const goToCart = () => navigate('/cart');
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
        <h4 className='color-secondary'>PRECIO WEB</h4>
        <div className="price-container">
          <p className='price'>S/. {product.precio}</p>
          <p className='price-right color-secondary'>
            <span style={{ textDecoration: 'line-through' }}>ANTES S/. {precioAntes}</span>
          </p>
        </div>
        <p className='color-secondary'>INVERSIONES BENITES' S.A.C. RUC: N°215898765465</p>
        {!isAddedToCart ? (
          <ItemCount stock={product.stock} initial={1} onAdd={onAdd} />
        ) : (
          <button onClick={goToCart} className="button-store"><p>Ir al carrito</p><FiArrowRight /></button>
        )}
        <p className='color-secondary'>{product.descripcion}</p>
        <p>Solo queda {product.stock} en stock</p>
        <div className='container-buttons'>
          <button className="button-back" onClick={() => navigate('/products')}>
            <FiArrowLeft />
            <p>Volver</p>
          </button>
        </div>
      </div>
    </div>
  );
};


export default ItemDetail;
