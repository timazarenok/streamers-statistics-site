import React from "react";

import './statistic-item.css'

const StatisticItem = ({ element, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td className="date-td">{element.date.substring(0, 10)}</td>
      <td className="caption-td">{element.caption}</td>
      <td>
        <a href={element.url}>{element.url}</a>
      </td>
      <td>{element.countSendTo}</td>
      <td>{element.countWhoDelete}</td>
      <td>
        <button className="table-button">Подробнее</button>
      </td>
    </tr>
  );
};

export default StatisticItem;
