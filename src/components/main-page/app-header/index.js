import React from "react";
import Loader from "../../../services/loader";
import { connect } from "react-redux";

import "./app-header.css";

import avatar from "./boom.jpg";

const AppHeader = (props) => {
  const nickname = props.nickname;
  const { totalSubs } = props.streamerData;
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
            <div className="user_badge">
              <i>
                <img
                  src="https://img.icons8.com/dotty/20/000000/widgetsmith.png"
                  alt="badge"
                />
              </i>
              <i>
                <img
                  src="https://img.icons8.com/dotty/20/000000/widgetsmith.png"
                  alt="badge"
                />
              </i>
              <i>
                <img
                  src="https://img.icons8.com/dotty/20/000000/widgetsmith.png"
                  alt="badge"
                />
              </i>
            </div>
          </div>
          <div className="info_menu">
            <button className="like info_block">
              <img
                src="https://img.icons8.com/wired/30/000000/like.png"
                alt="badge"
              />
            </button>

            <div className="info_block">
              <p>Subsribers</p>
              <span>{totalSubs.SubCount}</span>
            </div>
            <div className="info_block">
              <p>Twitch Subsribers</p>
              <span>{totalSubs.countOfTwicth}</span>
            </div>
            <div className="info_block">
              <p>Youtube subscribers</p>
              <span>{totalSubs.countOfYoutube}</span>
            </div>
            <div className="info_block">
              <p>Country</p>
              <span>RU</span>
            </div>
            <div className="info_block">
              <p>Channel Type</p>
              <span>Games</span>
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
  (dispatch) => {}
)(AppHeader);
