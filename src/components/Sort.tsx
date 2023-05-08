import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Sort, SortPropertyEnum, setSort } from "../redux/slices/filterSlice";
import "../scss/components/Sort.scss";
import { RootState } from "../redux/store";

type SortItem = {
  name: string;
  sortProperty: SortPropertyEnum;
};

export const list: SortItem[] = [
  { name: "популярности (убыв)", sortProperty: SortPropertyEnum.RATING_DESC },
  { name: "популярности (возр)", sortProperty: SortPropertyEnum.RATING_ASC },
  { name: "цене (убыв)", sortProperty: SortPropertyEnum.COST_DESC },
  { name: "цене (возр)", sortProperty: SortPropertyEnum.COST_ASC },
  { name: "алфавиту", sortProperty: SortPropertyEnum.NAME_ASC },
];

type SortPopupValue = {
  value: Sort;
};

const SortPopup: React.FC<SortPopupValue> = React.memo(({ value }) => {
  const dispatch = useDispatch();
  const sort = useSelector((state: RootState) => state.filter.sort);
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
          <span onClick={() => isOpen(!open)}> {value.name}</span>
        </p>
      </div>
      <div className="sort-popup">
        {open &&
          list.map((obj, index) => (
            <p
              onClick={() => onClickSelected(obj)}
              className={
                value.sortProperty === obj.sortProperty
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
});
export default SortPopup;
