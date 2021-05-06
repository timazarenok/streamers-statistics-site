import React from "react";
import { Link } from "react-router-dom";
import "./app-nav.css";

const AppNav = () => (
  <div className="AppNav">
    <ul className="nav_menu">
      <Link to="/" className="nav_item">
        Поиск
      </Link>
      <Link to="/admin" className="nav_item">
        Все стримеры
      </Link>
    </ul>
  </div>
);

export default AppNav;
