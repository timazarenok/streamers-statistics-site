import React from "react";

import StatisticItem from "./statistic-item";
import { connect } from "react-redux";
import Loader from "../../../services/loader";
import { Table } from "react-bootstrap";

import "./statistic.css";
const Statistic = (props) => {
  const { notificationPerMonth } = props.streamerData;

  if (notificationPerMonth === undefined) {
    return (
      <>
        <Loader />
      </>
    );
  }

  const data = notificationPerMonth.data;

  return (
    <div className="notifications-block">
      <h2>Уведомления</h2>
      <Table> 
        <thead>
          <tr>
            <th>id</th>
            <th>Дата</th>
            <th>Название</th>
            <th>Ссылка</th>
            <th>Сообщений отправлено</th>
            <th>Сообщений удалено</th>
            <th>Все переходы</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => (
            <StatisticItem element={el} index={index} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default connect(
  (state) => ({
    nickname: state.nickname,
    streamerData: state.streamerData,
  }),
  (dispatch) => {}
)(Statistic);
