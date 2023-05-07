import React from "react";
import { Link } from "react-router-dom";
import "../scss/components/CartEmpty.scss";

const CartEmpty: React.FC = () => {
  return (
    <div className="cartEmpty">
      <h1>Корзина пустая!</h1>
      <p className="cartEmpty-text">
        Вероятнее всего Вы еще не заказывали товары.
      </p>
      <p className="cartEmpty-text">
        Для того чтобы заказ товар, перейдите на главную страницу.
      </p>
      <img src="/img/emptyBasket.svg" alt="empty" className="cartEmpty-img" />
      <Link to="/" className="cartEmpty-btn-back">
        Вернуться назад
      </Link>
    </div>
  );
};

export default CartEmpty;
