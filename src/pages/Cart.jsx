import React from "react";
import { Link } from "react-router-dom";

import "../scss/Cart.scss";

const Cart = () => {
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
        <div className="item">
          <div className="item-name">
            <img
              src="./img/guitar/guitar-class-1.jpg"
              alt="img"
            />
            <h3>
              title <p>settings</p>
            </h3>
          </div>
          <div className="item-count">
            <button className="count-btn">-</button>
            <p>3</p>
            <button className="count-btn">+</button>
          </div>
          <h3>price</h3>
          <button className="btn-delete">X</button>
        </div>
        <div className="item">
          <div className="item-name">
            <img
              src="./img/guitar/guitar-class-1.jpg"
              alt="img"
            />
            <h3>
              title <p>settings</p>
            </h3>
          </div>
          <div className="item-count">
            <button className="count-btn">-</button>
            <p>3</p>
            <button className="count-btn">+</button>
          </div>
          <h3>price</h3>
          <button className="btn-delete">X</button>
        </div>
        <div className="item">
          <div className="item-name">
            <img
              src="./img/guitar/guitar-class-1.jpg"
              alt="img"
            />
            <h3>
              title <p>settings</p>
            </h3>
          </div>
          <div className="item-count">
            <button className="count-btn">-</button>
            <p>3</p>
            <button className="count-btn">+</button>
          </div>
          <h3>price</h3>
          <button className="btn-delete">X</button>
        </div>
      </div>
      <div className="cart-summary">
        <div className="cart-summary-title">
          <p>Всего товаров: <span>10 шт.</span></p>
          <p>Сумма заказа: <span>100000 рублей</span> </p>
        </div>
        <div className="cart-back">
          <Link to="/" className="btn-back">Вернуться назад</Link>
          <button className="btn-pay">Оплатить сейчас</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
