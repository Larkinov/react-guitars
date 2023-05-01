import React from 'react'
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryId } from '../redux/slices/filterSlice';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Guitar from "../components/Guitar/Guitar";
import Skeleton from "../components/Guitar/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";

// import guitars from "./assets/data.json";

const Home = () => {

  const {categoryId, sort} = useSelector((state)=>state.filter);
  const dispatch = useDispatch();

  const {searchValue} = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  }


  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6444d6e4914c816083c0a023.mockapi.io/items?page=${currentPage}&limit=4&${
        categoryId > 0 ? `type=${categoryId}` : ""
      }${
        searchValue ? `search=${searchValue}` : ""
      }&sortBy=${sort.sortProperty.replace("-", "")}&order=${
        sort.sortProperty.includes("-") ? "asc" : "desc"
      }`
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <>
      <div className="content-setting">
        <Categories
          value={categoryId}
          onClickCategory={(id) => onChangeCategory(id)}
        />
        <Sort/>
      </div>
      <h2>Все гитары</h2>
      <div className="content-guitars">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => (
              <Guitar
                key={obj.id}
                name={obj.name}
                cost={obj.cost}
                urlImage={obj.urlImage}
                gString={obj.guitarString}
                gCase={obj.guitarCase}
              />
            ))}
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)}/>
    </>
  );
};

export default Home;
