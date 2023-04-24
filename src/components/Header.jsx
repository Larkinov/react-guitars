import { Link } from "react-router-dom";
import "../scss/components/Header.scss";

function Header() {
  return (
    <div>
      <div className="header-hiding"></div>

      <div className="header">
        <Link to="/">
          <div className="header-logo">
            <img src="img/logo.svg" alt="logo" width="40px" />
            <h3>REACT GUITARS</h3>
          </div>
        </Link>
        <Link to="/cart">
        <div className="basket">
          <p>&#8381;</p>
          <p>|</p>
          <img src="img/basket.svg" alt="basket" width="18px" />
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;