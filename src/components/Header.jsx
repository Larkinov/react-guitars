import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../scss/components/Header.scss";
import Search from "./Search";

function Header() {

  const {items, totalPrice} = useSelector(state=>state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
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
        <Search/>
        <Link to="/cart">
        <div className="basket">
          <p>{totalPrice} &#8381;</p>
          <p> | </p>
          <img src="img/basket.svg" alt="basket" width="18px" />
          <p>{totalCount}</p>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
