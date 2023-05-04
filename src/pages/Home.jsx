import React, { useRef } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
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
import { list } from "../components/Sort";
import { fetchGuitars } from "../redux/slices/guitarsSlice";
import ErrorUI from "../components/ErrorUI";

// import guitars from "./assets/data.json";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state) => state.filter
  );
  const { items, status } = useSelector((state) => state.guitar);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangePage = (number) => {
    dispatch(setCurrentPage(number));
  };

  const getGuitars = async () => {
    const sortBy = sort.sortProperty.replace("-", "");
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const search = searchValue ? `search=${searchValue}` : "";
    const category = categoryId > 0 ? `type=${categoryId}` : "";
    dispatch(
      fetchGuitars({
        sortBy,
        order,
        search,
        category,
        currentPage,
      })
    );
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
      getGuitars();
    }

    isSearch.current = false;
  }, [categoryId, sort, searchValue, currentPage]);

  const guitarsUI = items.map((obj) => (
    <Guitar
      id={obj.id}
      key={obj.id}
      name={obj.name}
      cost={obj.cost}
      urlImage={obj.urlImage}
      gString={obj.guitarString}
      gCase={obj.guitarCase}
    />
  ));

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));
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
      {status === "error" ? (
        <ErrorUI/>
      ) : (
        <div className="content-guitars">
          {status === "loading" ? skeletons : guitarsUI}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  );
};

export default Home;
