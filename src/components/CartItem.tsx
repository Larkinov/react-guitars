import React from "react";
import { useDispatch } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/slices/cartSlice";

type CartItemProps = {
  id:string;
  name:string;
  typeOne:string;
  typeTwo:string;
  cost:number;
  count:number;
  urlImage:string;
}

const CartItem:React.FC<CartItemProps> = ({ id, name, typeOne, typeTwo, cost, count, urlImage }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  const onClickRemove = () => {
    if (window.confirm("Вы уверены, что хотите убрать товар?")) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div>
      <div className="item">
        <div className="item-name">
          <img src={urlImage} alt="img" style={{ margin: "1rem" }} />
          <h3>
            {name}
            <p>
              {typeOne} {typeTwo}
            </p>
          </h3>
        </div>
        <div className="item-count">
          <button className="count-btn" onClick={onClickMinus}>
            -
          </button>
          <p>{count}</p>
          <button className="count-btn" onClick={onClickPlus}>
            +
          </button>
        </div>
        <h3>{cost * count}</h3>
        <button className="btn-delete" onClick={onClickRemove}>
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
