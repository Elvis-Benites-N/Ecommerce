import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink to="/" className="navbar-brand">
              <img src="/logo.svg" alt="Logo" />
            </NavLink>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/" className="nav-link" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link" activeClassName="active">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  <CartWidget />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
