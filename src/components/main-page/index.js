import React, { useEffect, useState } from "react";
import Sidebar from "./sidebar";
import Statistic from "./statistic";
import AppHeader from "./app-header";
import AppNav from "./app-nav";
import Spreadsheet from "./spreadsheet";

import { connect } from "react-redux";
import { getData } from "../../redux/actions";
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
    this.setState(this.props.streamerData);
  }

  render() {
    return (
      <div className="App">
        <header>
          <AppHeader />
          <AppNav />
        </header>
        <main className="main">
          <section className="section">
            <Chart />
          </section>
          <aside className="aside">
            <Sidebar />
          </aside>
        </main>
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
  })
)(MainPage);
