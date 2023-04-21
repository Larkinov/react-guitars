import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import Guitar from "./components/Guitar";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <div className="content-setting">
          <Categories />
          <Sort/>
        </div>
        <h2>Все гитары</h2>
        <div className="content-guitars">
          <Guitar title="Говно"/>
          <Guitar title="Говно"/>
          <Guitar title="Говно"/>
        </div>
      </div>
    </div>
  );
}

export default App;
