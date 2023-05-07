import "../scss/components/Categories.scss";


type CategoriesProps = {
  value:number;
  onClickCategory:any;
}

const Categories:React.FC<CategoriesProps> = ({ value, onClickCategory }) => {
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
