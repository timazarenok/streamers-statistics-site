import React from "react";

import StreamersItem from "./streamer-item";
import Loader from "../../services/loader";
import { connect } from "react-redux";
import { changeNickname, getNicknames } from "../../redux/actions";

import "./streamer-page.css";

class StreamersPage extends React.Component {
  componentDidMount() {
    this.props.getNicknames();
  }

  handleSubmit = (nickname) => {
    this.props.changeNickname(nickname);
  };

  render() {
    const { streamers } = { ...this.props };
    if (streamers.length === 0) {
      return (
        <>
          <Loader />
        </>
      );
    }

    return (
      <div className="streamers">
        <h1 className="header">Все стримеры</h1>
        <ul className="streamers-list">
          {streamers.map((element) => (
            <StreamersItem element={element} handleSubmit={this.handleSubmit} />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    nickname: state.nickname,
    streamers: state.streamers,
  }),
  (dispatch) => ({
    changeNickname: (nickname) => dispatch(changeNickname(nickname)),
    getNicknames: () => dispatch(getNicknames()),
  })
)(StreamersPage);
