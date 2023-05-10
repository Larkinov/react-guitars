import React from "react";
import "../scss/Info.scss";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div className="info">
      <h1>React Guitars</h1>
      <p>
        Проект создавался для усвоения навыков программирования (исключительно
        фронтенд) и верстки. Применяемые технологии, библиотеки и средства:
      </p>
      <ul>
        <li>HTML5 (хотя никакого аудио и видео на сайте нет);</li>
        <li>CSS3;</li>
        <li>SCSS;</li>
        <li>TypeScript 5 (только для типизации);</li>
        <li>ReactJS 18 (React hooks);</li>
        <li>React Router v6 (навигация);</li>
        <li>React Content Loader (скелетон);</li>
        <li>React Pagination (очень кривой);</li>
        <li>Redux Toolkit v1.9.5 (хранение данных);</li>
        <li>Axios (запрос на "бэкенд");</li>
        <li>Сайт mockapi.io (в виде кривого бэкенда);</li>
        <li>
          Курс - React Pizza V2 от Archakov Blog (в виде одностороннего
          ментора);
        </li>
      </ul>
      <h3 style={{ textAlign: "center", marginBottom: "0.5rem" }}>ИТОГИ</h3>
      <p>
        Почти весь сайт сделан под курс React Pizza v2. Если посмотреть видео,
        то видно очевидное сходство. Сам курс был несложным, но очень
        познавательным.
      </p>
      <p style={{ marginBottom: "0.5rem" }}>
        От себя здесь была лишь небольшая часть верстки, и то которая прошла не
        очень хорошо и это иногда заметно.
      </p>
      <p >P.S. : ужасный дизайн, ужасно кривой код, ужасная структура проекта. Прекрасно.</p>
      <Link to="/" className="info-btn-back">
        Вернуться назад
      </Link>
    </div>
  );
}

export default Info;
