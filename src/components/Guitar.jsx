import { useState } from "react";
import "../scss/components/Guitar.scss";

function Guitar({ name, cost, urlImage, gString, gCase }) {
  const [guitarCount, setGuitarCount] = useState(0);
  const [guitarString, setGuitarString] = useState(0);
  const [guitarCase, setGuitarCase] = useState(0);

  const setCount = (name) => {
    if (name === "+") setGuitarCount(guitarCount + 1);
    if (name === "-" && guitarCount != 0) setGuitarCount(guitarCount - 1);
  };

  return (
    <div className="guitar">
      <img src={urlImage} alt="" className="guitar-image" />
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
        <button className="count-btn" onClick={() => setCount("+")}>
          +
        </button>
        <p>{guitarCount}</p>
        <button className="count-btn" onClick={() => setCount("-")}>
          −
        </button>
      </div>
    </div>
  );
}

export default Guitar;
