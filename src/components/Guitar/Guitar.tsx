import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, addItem } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import "../../scss/components/Guitar.scss";
import { RootState } from "../../redux/store";

const typeString = ["Без струн", "Комп. струн"];
const typeCase = ["Без чехла", "С чехлом"];

type GuitarProps = {
  id:string;
  name:string;
  cost:number;
  urlImage:string;
  gString:string[];
  gCase:string[];
}

const Guitar:React.FC<GuitarProps> = ({ id, name, cost, urlImage, gString, gCase }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state:RootState) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const addedCount = cartItem ? cartItem.count : 0;

  const [guitarCount, setGuitarCount] = useState(0);
  const [guitarString, setGuitarString] = useState(0);
  const [guitarCase, setGuitarCase] = useState(0);

  const onClickAdd = () => {
    
    setGuitarCount(guitarCount + 1);
    const item:CartItem = {
      id,
      name,
      cost,
      urlImage,
      gString: typeString[guitarString],
      gCase: typeCase[guitarCase],
      count:0
    };
    dispatch(addItem(item));
  };

  return (
    <div className="guitar">
      <Link to={`/guitar/${id}`}>
        <img src={urlImage} alt="" className="guitar-image" />
      </Link>
      <h3>{name}</h3>
      <div className="additional">
        <ul className="list-additional">
          {gString.map((value, index) => (
            <li
              key={index}
              onClick={() => {
                setGuitarString(index);
              }}
              className={guitarString === index ? "activeString" : ""}
            >
              {value}
            </li>
          ))}
        </ul>
        <ul className="list-additional">
          {gCase.map((value, index) => (
            <li
              key={index}
              onClick={() => {
                setGuitarCase(index);
              }}
              className={guitarCase === index ? "activeString" : ""}
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
      <div className="add">
        <p>от {cost} Р</p>
        <button className="count-btn" onClick={() => onClickAdd()}>
          <p>Добавить: {addedCount}</p>
        </button>
      </div>
    </div>
  );
}

export default Guitar;
