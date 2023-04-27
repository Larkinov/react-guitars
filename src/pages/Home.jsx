import { useEffect, useState } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Guitar from "../components/Guitar/Guitar";
import Skeleton from "../components/Guitar/Skeleton";

// import guitars from "./assets/data.json";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности (убыв)",
    sort: "rating",
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://6444d6e4914c816083c0a023.mockapi.io/items?${
        categoryId > 0 ? `type=${categoryId}` : ""
      }&sortBy=${sortType.sort.replace('-','')}&order=${sortType.sort.includes('-')? 'asc' : 'desc'}`,
    )
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryId, sortType]);

  return (
    <>
      <div className="content-setting">
        <Categories
          value={categoryId}
          onClickCategory={(id) => setCategoryId(id)}
        />
        <Sort value={sortType} onClickSort={(id) => setSortType(id)} />
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
    </>
  );
};

export default Home;
