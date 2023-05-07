import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../redux/slices/filterSlice";
import "../scss/components/Sort.scss";

type SortItem = {
  name: string;
  sortProperty: string;
};

type PopupClick = MouseEvent & {
  path: Node[];
};

export const list: SortItem[] = [
  { name: "популярности (убыв)", sortProperty: "rating" },
  { name: "популярности (возр)", sortProperty: "-rating" },
  { name: "цене (убыв)", sortProperty: "cost" },
  { name: "цене (возр)", sortProperty: "-cost" },
  { name: "алфавиту", sortProperty: "-name" },
];

function Sort() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.filter.sort);
  const sortRef = useRef<HTMLDivElement>(null);

  const [open, isOpen] = useState(false);

  const onClickSelected = (obj: SortItem) => {
    dispatch(setSort(obj));
    isOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {      
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        isOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      //размонтирование компонента
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort-label">
        <p>
          Сортировка по:
          <span onClick={() => isOpen(!open)}> {sort.name}</span>
        </p>
      </div>
      <div className="sort-popup">
        {open &&
          list.map((obj, index) => (
            <p
              onClick={() => onClickSelected(obj)}
              className={
                sort.sortProperty === obj.sortProperty
                  ? "popup-element-active"
                  : "popup-element"
              }
              key={index}
            >
              {obj.name}
            </p>
          ))}
      </div>
    </div>
  );
}

export default Sort;
