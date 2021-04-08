import React from "react";
import { Link } from "react-router-dom";
import "./app-nav.css";

const AppNav = () => (
  <div className="AppNav">
    <ul className="nav_menu">
      <Link to="/" className="nav_item">
        Login
      </Link>
      <Link to="/main" className="nav_item">
        Main
      </Link>
      <Link to="/admin" className="nav_item">
        Streamers Page
      </Link>
    </ul>
  </div>
);

export default AppNav;
