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
    <>
      <h2>Notifications</h2>
      <Table> 
        <thead>
          <tr>
            <th>id</th>
            <th>Date</th>
            <th>Caption</th>
            <th>Link</th>
            <th>Messages sended</th>
            <th>Messages deleted</th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, index) => (
            <StatisticItem element={el} index={index} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default connect(
  (state) => ({
    nickname: state.nickname,
    streamerData: state.streamerData,
  }),
  (dispatch) => {}
)(Statistic);
