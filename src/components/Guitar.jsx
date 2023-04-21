import "../scss/components/Guitar.scss";

function Guitar (props) {
    return (
        <div className="guitar">
            <img
              src="./img/guitar/guitar-class-1.jpg"
              alt=""
              className="guitar-image"
            />
            <h3>{props.title}</h3>
            <div className="additional">
              <ul className="list-additional">
                <li style={{ marginRight: "1rem" }}>Без струн</li>
                <li>Доп. струны</li>
              </ul>
              <ul className="list-additional">
                <li style={{ marginRight: "1rem" }}>Без чехла</li>
                <li>С чехлом</li>
              </ul>
            </div>
            <div className="add">
              <p>от 300 Р</p>
              <button className="count-btn">+</button>
              <p> 0 </p>
              <button className="count-btn">−</button>
            </div>
          </div>
    )
}

export default Guitar;