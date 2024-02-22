import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<><ItemListContainer title="Bienvenido a la Tienda" /><HomePage /></>} />
      </Routes>
    </>
  );
}

export default App;