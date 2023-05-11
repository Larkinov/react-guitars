import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./scss/app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Btn from "./components/Btn";

const MainLayout: React.FC = () => {
  return (
    <div className="main">
      <Link to="/info">
        <Btn />
      </Link>

      <Header />
      <div className="content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
