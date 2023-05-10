import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../scss/Cart.scss";
import { CartItem, CartEmpty } from "../components";
import { clearItems, selectorCart } from "../redux/slices/cartSlice";


const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const {totalPrice, items} = useSelector(selectorCart);

  const totalCount = items.reduce((sum:number, item:any) => sum + item.count, 0);


  const onClickClear = () => {
    if (window.confirm("Очистить корзину?")) {
      dispatch(clearItems());
    }
  };

  if(!totalPrice){
    return <CartEmpty/>;
  }

  return (
    <div className="cart">
      <div className="cart-title">
        <h1>
          <img
            className="cart-title-image"
            src="./img/basket.svg"
            alt="cart"
            style={{ marginRight: "0.5rem" }}
          />
          Корзина
        </h1>
        <div className="cart-clear" onClick={onClickClear}>Очистить корзину</div>
      </div>
      <div className="cart-content">
        {
          items.map((item:any) => (
            <CartItem key={item.id} {...item}/>
          ))
        }
      </div>
      <div className="cart-summary">
        <div className="cart-summary-title">
          <p>
            Всего товаров: <span>{totalCount} шт.</span>
          </p>
          <p>
            Сумма заказа: <span>{totalPrice} рублей</span>
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
