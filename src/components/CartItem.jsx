import React from "react";

const CartItem = () => {
  return (
    <div>
      <div className="item">
        <div className="item-name">
          <img src="./img/guitar/guitar-class-1.jpg" alt="img" />
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
  );
};

export default CartItem;
