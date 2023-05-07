import React from "react";
import "../scss/components/CartEmpty.scss";

const ErrorUI: React.FC = () => {
  return (
    <div className="cartEmpty">
      <h1>Произошла ошибка!</h1>
      <p className="cartEmpty-text">Не удалось получить товары</p>
      <p className="cartEmpty-text">Попробуйте повторить попытку позже</p>
    </div>
  );
};

export default ErrorUI;
