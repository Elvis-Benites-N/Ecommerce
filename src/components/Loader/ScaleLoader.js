import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loader = () => (
  <div className="loader">
    <p className='color-secondary loader-title'>CARGANDO PRODUCTOS...</p>
    <ScaleLoader color="#FFCA40" />
  </div>
);

export default Loader;