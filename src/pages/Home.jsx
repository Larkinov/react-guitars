import React, { useRef } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Guitar from "../components/Guitar/Guitar";
import Skeleton from "../components/Guitar/Skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { list } from "../components/Sort";

// import guitars from "./assets/data.json";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filter
  );

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const fetchGuitars = () => {
    setIsLoading(true);
    axios
      .get(
        `https://6444d6e4914c816083c0a023.mockapi.io/items?page=${currentPage}&limit=4&${
          categoryId > 0 ? `type=${categoryId}` : ""
        }${
          searchValue ? `search=${searchValue}` : ""
        }&sortBy=${sort.sortProperty.replace("-", "")}&order=${
          sort.sortProperty.includes("-") ? "asc" : "desc"
        }`
      )
      .then((response) => {
        setItems(response.data);
        setIsLoading(false);
      });
  };

  //если изменили параметры и был первый рендер
  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`);
    }

    isMounted.current = true;
  }, [categoryId, sort, searchValue, currentPage]);

  //Если был первый рендер, проверяем url-параметры и сохрянаем в redux
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );

      isSearch.current = true;
    }
  }, []);

  //Если был первый рендер, то запрашиваем гитары
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchGuitars();
    }

    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  return (
    <>
      <div className="content-setting">
        <Categories
          value={categoryId}
          onClickCategory={(id) => onChangeCategory(id)}
        />
        <Sort />
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
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
