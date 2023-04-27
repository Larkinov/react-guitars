// import { useState } from "react";
import "../scss/components/Categories.scss";

function Categories({ value, onClickCategory }) {
  // const [activeIndex, setActiveIndex] = useState(0);

   // const onClickCategory = (index) => {
  //   setActiveIndex(index);
  // };

  const categories = [
    "Все",
    "Классические",
    "Акустические",
    "Электрогитары",
    "Бас-гитары",
    "Укулеле",
  ];

  return (
    <ul className="list-guitar">
      {categories.map((categoryName, index) => (
        <li
          key={index}
          onClick={() => {
            onClickCategory(index);
          }}
          className={value === index ? "active" : ""}
        >
          {categoryName}
        </li>
      ))}
    </ul>
  );
}

export default Categories;
