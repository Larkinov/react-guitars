import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Guitar from "./components/Guitar";
import guitars from "./assets/data.json";


function App() {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <div className="content-setting">
          <Categories />
          <Sort />
        </div>
        <h2>Все гитары</h2>
        <div className="content-guitars">
          {guitars.map((obj) => (
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
      </div>
    </div>
  );
}

export default App;
