import "./scss/app.scss";

function App() {
  return (
    <div className="main">
      <div className="header">
        <div className="header-logo">
          <img src="./img/logo.svg" alt="logo" width="40px" />
          <h3>REACT GUITARS</h3>
        </div>
        <div className="basket">
          <p>&#8381;</p>
          <p>|</p>
          <img src="./img/basket.svg" alt="basket" width="18px" />
        </div>
      </div>
      <div className="content">
        <div className="content-setting">
          <ul class="list-guitar">
            <li>Все</li>
            <li>Классические</li>
            <li>Акустические</li>
            <li>Электрогитары</li>
            <li>Бас-гитары</li>
            <li>Укулеле</li>
          </ul>
          <form>
          <label for="sort-guitar">Сортировка по: </label>
          <select name="sort" id="sort-guitar" className="select-sort">
            <option value="popularity">популярности</option>
            <option value="cost-min">цене (возв)</option>
            <option value="cost-max">цене (убыв)</option>
            <option value="alphabet">алфавиту</option>
          </select>
        </form>
        </div>
        <h2>Все гитары</h2>
        <div className="content-guitars">
          <img src="./img/guitar/guitar-class-1.jpg" alt="" />
          <img src="./img/guitar/guitar-class-2.jpg" alt="" />
          <img src="./img/guitar/guitar-class-3.jpg" alt="" />
          <img src="./img/guitar/guitar-class-4.jpg" alt="" />
          <img src="./img/guitar/guitar-acoustic-1.jpg" alt="" />
          <img src="./img/guitar/guitar-acoustic-3.jpg" alt="" />
          <img src="./img/guitar/guitar-acoustic-2.jpg" alt="" />
          <img src="./img/guitar/guitar-acoustic-4.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
