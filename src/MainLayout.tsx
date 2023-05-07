import React from "react";
import { Outlet } from "react-router-dom";
import "./scss/app.scss";
import Header from "./components/Header";


const MainLayout: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
