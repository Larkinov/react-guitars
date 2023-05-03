import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../scss/Cart.scss";
import CartItem from "../components/CartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items.find());

  return (
    <div className="cart">
      <div className="cart-title">
        <h1>
          <img
            src="./img/basket.svg"
            alt="cart"
            width="40px"
            style={{ marginRight: "0.5rem" }}
          />
          Корзина
        </h1>
        <div className="cart-clear">Очистить корзину</div>
      </div>
      <div className="cart-content">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-summary">
        <div className="cart-summary-title">
          <p>
            Всего товаров: <span>10 шт.</span>
          </p>
          <p>
            Сумма заказа: <span>100000 рублей</span>{" "}
          </p>
        </div>
        <div className="cart-back">
          <Link to="/" className="btn-back">
            Вернуться назад
          </Link>
          <button className="btn-pay">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
