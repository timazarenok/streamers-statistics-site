import React from "react";

import Chart from "../../../chart";
import dateformat from 'dateformat'

const StatisticItem = ({element, index}) => {

  return (
    <tr>
      <td>{index}</td>
      <td>{element.date.substring(0, 10)}</td>
      <td>{element.caption}</td>
      <td>{element.url}</td>
      <td>{element.countSendTo}</td>
      <td>{element.countWhoDelete}</td>
    </tr>
  )
}

export default StatisticItem;
