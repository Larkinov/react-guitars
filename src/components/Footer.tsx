import React from "react";
import "../scss/components/Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>© Larkinov Buyanto</p>
          <p>11.05.2023</p>
          <p className="footer-text-description">
            Данный проект является учебным. Весь функционал недействителен.
          </p>
          <p className="footer-text-description">
            Все данные взяты из свободного доступа.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
