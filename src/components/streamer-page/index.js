import React from "react";

import StreamersItem from "./streamer-item";
import Loader from "../../services/loader";
import { connect } from "react-redux";
import { changeNickname, getNicknames } from "../../redux/actions";

import "./streamer-page.css";
import { Form } from "react-bootstrap";

class StreamersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search_input: "",
    };
  }

  componentDidMount() {
    this.props.getNicknames();
  }

  handleSubmit = (nickname) => {
    this.props.changeNickname(nickname);
  };

  onChangeSearch = (e) => {
    this.setState({ search_input: e.target.value });
  };

  render() {
    const { search_input } = { ...this.state };
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
        <h3 className="search-header">Поиск</h3>
        <Form.Control className="search-input" value={search_input} onChange={this.onChangeSearch} />
        <ul className="streamers-list">
          {streamers.filter(el => el.includes(search_input))
            .sort((a, b) => {
              if (a < b) {
                return -1;
              }
              if (a > b) {
                return 1;
              }
              return 0;
            })
            .map((element) => (
              <StreamersItem
                element={element}
                handleSubmit={this.handleSubmit}
              />
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
