import React from "react";
import { useDispatch } from "react-redux";
import { CartItem, addItem, minusItem, removeItem } from "../redux/slices/cartSlice";

type CartItemProps = {
  id:string;
  name:string;
  gString:string;
  gCase:string;
  cost:number;
  count:number;
  urlImage:string;
}

const CartItemBlock:React.FC<CartItemProps> = ({ id, name, gString, gCase, cost, count, urlImage }) => {
  const dispatch = useDispatch();

  const onClickPlus = () => {
    dispatch(addItem({ id } as CartItem));
    console.log(gString);
    
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
              {gString} {gCase}
            </p>
          </h3>
        </div>
        <div className="item-count">
          <button disabled = {count===1} className="count-btn" onClick={onClickMinus}>
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

export default CartItemBlock;
