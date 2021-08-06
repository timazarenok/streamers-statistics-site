import React from "react";
import Loader from "../../../services/loader";
import { connect } from "react-redux";

import "./app-header.css";

import avatar from "./boom.jpg";
import { Link } from "react-router-dom";

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
                <Link className="subs-link" to={`/main/${nickname}/subs`}>
                  <p>Подписчики</p>
                  <span>{totalSubs.SubCount}</span>
                </Link>
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
                <p>Twich & Youtube</p>
                <span>{totalSubs.countOfTwicthYoutube}</span>
              </div>
              <div className="info_block">
                <p>За день</p>
                <span>{avgPerDay.toFixed(0)}</span>
              </div>
              <div className="info_block">
                <p>За неделю</p>
                <span>{avgPerWeek.toFixed(0)}</span>
              </div>
              <div className="info_block">
                <p>За месяц</p>
                <span>{avgPerMonth.toFixed(0)}</span>
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
