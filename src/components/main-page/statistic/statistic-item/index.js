import React from "react";

import Chart from "../../../chart";
import dateformat from 'dateformat'

const StatisticItem = ({element, index}) => {

  return (
    <tr>
      <td>{index}</td>
      <td className="date-td">{element.date.substring(0, 10)}</td>
      <td className="caption-td">{element.caption}</td>
      <td><a href={element.url}>{element.url}</a></td>
      <td>{element.countSendTo}</td>
      <td>{element.countWhoDelete}</td>
    </tr>
  )
}

export default StatisticItem;
