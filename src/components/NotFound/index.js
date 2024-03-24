import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import '../../styles/products/productsDetails.css'

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <h3>404 No se ha encontrado contenido</h3>
      <button className="button-back" onClick={() => navigate('/products')}>
        <FiArrowLeft /> <p>Volver</p>
      </button>
    </div>
  );
};

export default NotFound;