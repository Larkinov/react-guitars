import { useEffect, useState } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Guitar from "../components/Guitar/Guitar";
import Skeleton from "../components/Guitar/Skeleton";

// import guitars from "./assets/data.json";


const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://6444d6e4914c816083c0a023.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content-setting">
        <Categories />
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
    </>
  );
};

export default Home;