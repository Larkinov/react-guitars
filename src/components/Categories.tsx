import React from "react";
import "../scss/components/Categories.scss";


type CategoriesProps = {
  value:number;
  onClickCategory:(i:number) => void;
}

const categories = [
  "Все",
  "Классические",
  "Акустические",
  "Электрогитары",
  "Бас-гитары",
  "Укулеле",
];

const Categories:React.FC<CategoriesProps> = React.memo(({ value, onClickCategory }) => {
  

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
})

export default Categories;
