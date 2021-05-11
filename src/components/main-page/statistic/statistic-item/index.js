import React, { useState } from "react";
import { getClicks } from "../../../../redux/actions";

import "./statistic-item.css";

const StatisticItem = ({ element, index }) => {
  const [data, setData] = useState([]);

  const dataGetClick = () => {
    getClicks(element.url).then(resposne => setData(resposne))
  }

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
        {
          data.length > 0 ? (<div>{data.map(el => <div>{el.value}: {el.clicks}</div>)}</div>) : (
          <button className="table-button" onClick={dataGetClick}>
            Подробнее
          </button>)
        }
        
      </td>
    </tr>
  );
};

export default StatisticItem;
