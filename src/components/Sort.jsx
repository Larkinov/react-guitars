import { useState } from "react";
import "../scss/components/Sort.scss";

function Sort() {
  const [open, isOpen] = useState(false);
  const [selected, setSelected] = useState(0);

  const list = ["популярности", "цене (возв)", "цене (убыв)", "алфавиту"];

  const onClickSelected = (index) => {
    setSelected(index);
    isOpen(false);
  };

  return (
    <div className="sort">
      <div className="sort-label">
        <p>
          Сортировка по:
          <span onClick={() => isOpen(!open)}> {list[selected]}</span>
        </p>
      </div>
      <div className="sort-popup">
        {open &&
          list.map((value, index) => (
            <p
              onClick={() => onClickSelected(index)}
              className={
                selected === index ? "popup-element-active" : "popup-element"
              }
              key={index}
            >
              {value}
            </p>
          ))}
      </div>
    </div>
    // <form>
    //   <label htmlFor="sort-guitar">Сортировка по: </label>
    //   <div>
    //     <select name="sort" id="sort-guitar" className="select-sort">
    //       {list.map((value,index)=> (
    //         <option key={index}>{value}</option>
    //       ))}
    //     </select>
    //   </div>
    // </form>
  );
}

export default Sort;
