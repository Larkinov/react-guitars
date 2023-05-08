import React, { useCallback, useEffect, useRef, useState } from "react";
//@ts-ignore
import debounce from "lodash.debounce";
import style from "./Search.module.scss";
import { setSearchValue } from "../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    if (inputRef.current) inputRef.current.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 300),
    []
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  return (
    <div className={style.root}>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        placeholder="Поиск..."
        className={style.input}
      ></input>
      {value && (
        <svg
          onClick={() => onClickClear()}
          className={style.iconClose}
          viewBox="0 -0.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>close [#1511]</title>
          <desc>Created with Sketch.</desc>
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-419.000000, -240.000000)"
              fill="#000000"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <polygon
                  id="close-[#1511]"
                  points="375.0183 90 384 98.554 382.48065 100 373.5 91.446 364.5183 100 363 98.554 371.98065 90 363 81.446 364.5183 80 373.5 88.554 382.48065 80 384 81.446"
                ></polygon>
              </g>
            </g>
          </g>
        </svg>
      )}
    </div>
  );
};

export default Search;
