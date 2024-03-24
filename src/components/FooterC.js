import React from "react";
import { Link } from "react-router-dom";
const FooterC = () => {
  return (
    <div className="footer">
      <h3 className="text-center">Todos los derechos reservados &copy; Elvis Benites</h3>
      <p className="text-center mt-3">
        <Link to="#">Sobre mí</Link>|<Link to="#">Contactos</Link>|
        <Link to="#">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default FooterC;