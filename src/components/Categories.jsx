import { useState } from "react";
import "../scss/components/Categories.scss";

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Все",
    "Классические",
    "Акустические",
    "Электрогитары",
    "Бас-гитары",
    "Укулеле",
  ];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className="list-guitar">
      {categories.map((value, index) => (
        <li
        key={index}
          onClick={() => {
            onClickCategory(index);
          }}
          className={activeIndex === index ? "active" : ""}
        >
          {value}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
