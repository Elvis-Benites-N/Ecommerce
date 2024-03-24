import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './containers/ItemListContainer';
import HomePage from './pages/HomePage';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NotFound from './components/NotFound';
import Cart from './components/ShopCart/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Navbar  />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ItemListContainer title="Productos" />} />
        <Route path="/products/:id" element={<ItemDetailContainer />} />
        <Route path="/products/categoria/:category" element={<ItemListContainer title="Productos" />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}

export default App;