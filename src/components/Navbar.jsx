const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="navbar__items">
        <li>
          <span
            className="navbar__link"
            data-to="/women/category/%20/sortBy/sort=freshness/filter/%20/search/%20/offset/48"
          >
            Mujeres
          </span>
        </li>
        <li>
          <span
            className="navbar__link"
            data-to="/men/category/%20/sortBy/sort=freshness/filter/%20/search/%20/offset/48"
          >
            Hombres
          </span>
        </li>
        <li>
          <span
            className="navbar__link"
            data-to="/sneakers/category/%20/sortBy/sort=freshness/filter/%20/search/%20/offset/48"
          >
            Sneakers
          </span>
        </li>
        <li>
          <span className="navbar__link" data-to="/about" >
            About
          </span>
        </li>
        <li>
          <span className="navbar__link" id="contact" data-to="/contact">
            Contactanos
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
