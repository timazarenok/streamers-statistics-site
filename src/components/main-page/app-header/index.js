import React from "react";
import Loader from "../../../services/loader";
import { connect } from "react-redux";

import "./app-header.css";

import avatar from "./boom.jpg";

const AppHeader = (props) => {
  const nickname = props.nickname;
  const { totalSubs, avgPerDay, avgPerWeek, avgPerMonth } = props.streamerData;
  if (totalSubs === undefined) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="AppHeader">
      <div className="user_block">
        <img className="user_avatar" src={avatar} alt="Avatar" />
        <div className="user_info_block">
          <div className="user_name">
            <h2>{nickname}</h2>
            <div className="info_menu">
              <div className="info_block">
                <p>Подписчики</p>
                <span>{totalSubs.SubCount}</span>
              </div>
              <div className="info_block">
                <p>Twitch</p>
                <span>{totalSubs.countOfTwicth}</span>
              </div>
              <div className="info_block">
                <p>Youtube</p>
                <span>{totalSubs.countOfYoutube}</span>
              </div>
              <div className="info_block">
                <p>Twich and Youtube</p>
                <span>{totalSubs.countOfTwicthYoutube}</span>
              </div>
              <div className="info_block">
                <p>Среднее за день</p>
                <span>{avgPerDay}</span>
              </div>
              <div className="info_block">
                <p>Среднее за неделю</p>
                <span>{avgPerWeek}</span>
              </div>
              <div className="info_block">
                <p>Среднее за месяц</p>
                <span>{avgPerMonth}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    nickname: state.nickname,
    streamerData: state.streamerData,
  }),
  (dispatch) => ({})
)(AppHeader);
