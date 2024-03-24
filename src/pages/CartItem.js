import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';

const CartItem = ({ id, nombre, categoria, precio, cantidad, img, descripcion, firestoreId }) => {
    const { removeFromCart } = useContext(CartContext);

    return (
        <div className='item'>
            <div className="category">
                <p>{categoria}</p>
                <div className="category-border"></div>
            </div>
            <div id="name">{nombre}</div>
            <div id="details">
                <div id="image"><img src={img} alt={nombre} /></div>
                <div id="info">
                    <div className="price">Precio: ${precio * cantidad}</div>
                    <p>Precio unitario: ${precio}</p>
                    <div id="description">{descripcion}</div>
                </div>
            </div>
            <div id="more">
                <div id="stock">Cantidad: {cantidad}</div>
                <button id="delete-button" onClick={() => removeFromCart(firestoreId)}>
                    <FaTrash />
                </button>
            </div>

        </div>

    );
};

export default CartItem;
