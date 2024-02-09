
import Navbar from "./Navbar";
import MediaQuery from "react-responsive";
const Header = () => {
  return (
    <header className="header">
      <div className="header__navigation">
        <div className="header__menu-container">
          
        </div>
        <img
          className="header__logo"
          src="../assets/logo.svg"
          width={150}
          height={50}
          alt="logo"
        />
       
        <MediaQuery query="(min-width: 415px)">
          <Navbar />
        </MediaQuery>
      </div>

    </header>
  );
};

export default Header;
