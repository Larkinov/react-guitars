import React from "react";
import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

import "../scss/FullGuitar.scss";

const FullGuitars: React.FC = () => {
  const params = useParams();
  const [guitar, setGuitar] = useState<{
    urlImage: string;
    name: string;
    cost: string;
  }>();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGuitars() {
      try {
        const { data } = await axios.get(
          "https://6444d6e4914c816083c0a023.mockapi.io/items/" + params.id
        );
        setGuitar(data);
      } catch (error) {
        alert("Ошибка при получении товара!");
        navigate("/");
      }
    }
    fetchGuitars();
  }, []);

  if (!guitar) {
    return <>"Загрузка..."</>;
  }

  return (
    <>
      <div className="fullGuitar">
        <div className="fullGuitar-box">
          <img
            src={"/" + guitar.urlImage}
            alt="ImageProduct"
            className="fullGuitar-img"
          />
          <h3>Цена: {guitar.cost} рублей</h3>
        </div>
        <div className="fullGuitar-description">
          <h1>{guitar.name}</h1>
          <p>
            {" "}
            Гитара представляет собой корпус с длинной шейкой, называемой
            «грифом». Лицевая, рабочая сторона грифа — плоская либо слегка
            выпуклая. Вдоль неё параллельно натянуты струны, закреплённые одним
            концом на подставке корпуса, другим — на колковой коробке на
            окончании грифа. На подставке корпуса струны привязываются или
            крепятся неподвижно при помощи барашков, на головке грифа с помощью
            колкового механизма, позволяющего регулировать натяжение струн.
          </p>
        </div>
      </div>
      <Link to="/" className="btn-back">
        Вернуться назад
      </Link>
    </>
  );
};

export default FullGuitars;
