import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Layout from '../Layout/Layout';
import CartItem from '../../pages/CartItem';
import { FiArrowLeft } from 'react-icons/fi';
import '../../styles/products/productsDetails.css'

const Cart = () => {
    const navigate = useNavigate();
    const { cartItems } = useContext(CartContext);
    const total = cartItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
    return (

        <Layout title="Carrito de compras">
            <div className="container">
                <h1 className="color-secondary">Carrito de Compras</h1>
                <div className='item-list'>
                    {cartItems.length > 0 ? (
                        cartItems.map((product) => (
                            <CartItem
                                key={product.firestoreId}
                                firestoreId={product.firestoreId}
                                id={product.id}
                                nombre={product.nombre}
                                precio={product.precio}
                                categoria={product.categoria}
                                cantidad={product.quantity}
                                descripcion={product.descripcion}
                                img={product.img}
                            />
                        ))
                    ) : (
                        <div className="not-found-container">
                            <h3>Tu carrito está vacío.</h3>
                            <button className="button-back" onClick={() => navigate('/products')}>
                                <FiArrowLeft /> <p>Volver</p>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className='counter'>
                <div className='right-cart'>
                    <div className='labels'>
                        Total:
                    </div>
                    <div>
                        $ {total}
                    </div>
                </div>
                <div className='left'>
                    <button className="keep-button" onClick={() => navigate('/checkout')}>
                        <p>Continuar</p>
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Cart;
