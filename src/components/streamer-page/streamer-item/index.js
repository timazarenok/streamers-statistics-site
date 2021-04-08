import React from "react";
import { Link } from "react-router-dom";
import "./streamer-item.css";


const StreamersItem = ({ element, handleSubmit }) => (
  <li key={element} onClick={() => handleSubmit(element)}>
    <Link to={"/main/"+element}>
      <span className="streamer-name">{element}</span>
    </Link>
  </li>
);

export default StreamersItem;
