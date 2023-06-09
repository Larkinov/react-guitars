import React, { useCallback, useRef } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector} from "react-redux";
import {
  setCategoryId,
  setCurrentPage,
  setFilters,
} from "../redux/slices/filterSlice";

import {Categories,Sort, Guitar, Skeleton,Pagination,ErrorUI} from "../components";
import { list } from "../components/Sort";
import { FetchGuitarsArgs, fetchGuitars } from "../redux/slices/guitarsSlice";
import { RootState, useAppDispatch } from "../redux/store";


const Home:React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { categoryId, sort, currentPage, searchValue } = useSelector(
    (state:RootState) => state.filter
  );
  const { items, status } = useSelector((state:RootState) => state.guitar);

  const onChangeCategory = useCallback((id:number) => {
    dispatch(setCategoryId(id));
    dispatch(setCurrentPage(1));
  },[]);

  const onChangePage = (page:number) => {
    dispatch(setCurrentPage(page));
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
        currentPage: String(currentPage),
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
      const params = (qs.parse(window.location.search.substring(1)))as unknown as FetchGuitarsArgs;

      const sort = list.find((obj) => obj.sortProperty === params.sortBy);

      dispatch(
        setFilters({searchValue: params.search,
          categoryId: Number(params.category),
          currentPage: Number(params.currentPage),
          sort: sort || list[0],
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

  const guitarsUI = items.map((obj:any) => (
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
          onClickCategory={(id:number) => onChangeCategory(id)}
        />
        <Sort value={sort}/>
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
