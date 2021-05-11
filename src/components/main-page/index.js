import React from "react";
import Sidebar from "./sidebar";
import Statistic from "./statistic";
import AppHeader from "./app-header";
import AppNav from "./app-nav";

import { connect } from "react-redux";
import { changeNickname, getData } from "../../redux/actions";
import Chart from "../chart";

import "./main.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.props.getStreamerData(this.props.match.params.nickname);
    this.props.changeNickname(this.props.match.params.nickname);
    this.setState(this.props.streamerData);
  }

  render() {
    return (
      <div className="App">
        <header>
          <AppHeader />
          <AppNav />
        </header>
            <Chart />
        <Sidebar />
        <Statistic />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    nickname: state.nickname,
    streamerData: state.streamerData,
  }),
  (dispatch) => ({
    getStreamerData: (nickname) => dispatch(getData(nickname)),
    changeNickname: (nickname) => dispatch(changeNickname(nickname))
  })
)(MainPage);
