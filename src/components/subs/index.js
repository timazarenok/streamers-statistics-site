import React, { useEffect, useState } from "react";
import { changeNickname, getData } from "../../redux/actions";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";

import "./subs.css"

const Subs = (props) => {
  useEffect(() => {
    props.getStreamerData(props.nickname);
  }, [props.streamerData === {}]);
  console.log(props.streamerData.allSubs);

  return props.streamerData.allSubs ? (
    <div className="streamers">
      <h1 className="subs-header">Подписчики</h1>
      <Table className="subs-table">
        <thead>
          <tr>
            <th>Номер</th>
            <th>Nickname/ID</th>
          </tr>
        </thead>
        <tbody>
          {props.streamerData.allSubs.map((el, index) => (
            <tr>
              <td style={{width: "150px"}}>{index+1}</td>
              <td>{el}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  ) : null;
};

export default connect(
  (state) => ({
    nickname: state.nickname,
    streamerData: state.streamerData,
  }),
  (dispatch) => ({
    changeNickname: (nickname) => dispatch(changeNickname(nickname)),
    getStreamerData: (nickname) => dispatch(getData(nickname)),
  })
)(Subs);
