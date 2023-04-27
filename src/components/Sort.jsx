import { useState } from "react";
import "../scss/components/Sort.scss";

function Sort({value, onClickSort}) {

  // const [selected, setSelected] = useState(0);
     // {"цене (возв)", "цене (убыв)", "алфавиту"];
  // const sortName = list[value];

  const [open, isOpen] = useState(false);

  const onClickSelected = (index) => {
    onClickSort(index);
    isOpen(false);
  };

  const list = [
    {name : "популярности (убыв)", sort : "rating" }, 
    {name : "популярности (возр)", sort : "-rating" }, 
    {name : "цене (убыв)", sort : "cost" }, 
    {name : "цене (возр)", sort : "-cost" }, 
    {name : "алфавиту", sort : "-name" }, 
  ]

  return (
    <div className="sort">
      <div className="sort-label">
        <p>
          Сортировка по:
          <span onClick={() => isOpen(!open)}> {value.name}</span>
        </p>
      </div>
      <div className="sort-popup">
        {open &&
          list.map((obj, index) => (
            <p
              onClick={() => onClickSelected(obj)}
              className={
                value.sort === obj.sort ? "popup-element-active" : "popup-element"
              }
              key={index}
            >
              {obj.name}
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
