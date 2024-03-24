import React, { useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../context/CartContext';
import '../styles/shopcart/CartWidget.css';

const CartWidget = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.length; 

  return (
    <div className="cart-widget">
      <FaShoppingCart />
      {itemCount > 0 && <div className="cart-badge">{itemCount}</div>}
    </div>
  );
};

export default CartWidget;