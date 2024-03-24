import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { CartContext } from '../context/CartContext';
import '../styles/checkout/validateForm.css';

const Checkout = () => {
    const navigate = useNavigate();
    const { finalizePurchase } = useContext(CartContext);
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        emailConfirmation: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const isRequired = value => value !== '';
    const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!isRequired(formData.username)) {
            errors.username = "El nombre de usuario es obligatorio.";
            formIsValid = false;
        }

        if (!isRequired(formData.phone)) {
            errors.phone = "El teléfono es obligatorio.";
            formIsValid = false;
        }

        if (!isRequired(formData.email)) {
            errors.email = "El correo electrónico es obligatorio.";
            formIsValid = false;
        } else if (!isValidEmail(formData.email)) {
            errors.email = "El correo electrónico no es válido.";
            formIsValid = false;
        }

        if (!isRequired(formData.emailConfirmation)) {
            errors.emailConfirmation = "La confirmación del correo electrónico es obligatoria.";
            formIsValid = false;
        } else if (formData.email !== formData.emailConfirmation) {
            errors.emailConfirmation = "Los correos electrónicos no coinciden.";
            formIsValid = false;
        }

        setFormErrors(errors);
        return formIsValid;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            finalizePurchase(formData, navigate);
            setFormData({
                username: '',
                phone: '',
                email: '',
                emailConfirmation: '',
            });
        }
    };

    return (
        <Layout title="Checkout">
            <div className="checkout-page">
                <div className="checkout-container">
                    <h1 className="checkout-title">Gracias por tu compra!</h1>
                    <p className="checkout-subtitle">Validemos tus datos</p>
                    <form className="checkout-form" onSubmit={handleSubmit}>
                        {/* Nombre de usuario */}
                        <div className="form-group">
                            <label htmlFor="username">Nombre de usuario</label>
                            <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Ingresa tu nombre de usuario" />
                            {formErrors.username && <p className="error">{formErrors.username}</p>}
                        </div>
                        {/* Teléfono */}
                        <div className="form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Ingresa tu teléfono" />
                            {formErrors.phone && <p className="error">{formErrors.phone}</p>}
                        </div>
                        {/* Correo electrónico */}
                        <div className="form-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Ingresa tu correo" />
                            {formErrors.email && <p className="error">{formErrors.email}</p>}
                        </div>
                        {/* Confirmación de correo electrónico */}
                        <div className="form-group">
                            <label htmlFor="confirm-email">Repetir correo electrónico</label>
                            <input type="email" id="confirm-email" name="emailConfirmation" value={formData.emailConfirmation} onChange={handleChange} placeholder="Repite tu correo" />
                            {formErrors.emailConfirmation && <p className="error">{formErrors.emailConfirmation}</p>}
                        </div>
                        <button type="submit" className="checkout-button">Comprar</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Checkout;
