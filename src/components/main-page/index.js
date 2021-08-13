import React from "react";
import Sidebar from "./sidebar";
import Statistic from "./statistic";
import AppHeader from "./app-header";
import AppNav from "./app-nav";

import { Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { changeNickname, getData } from "../../redux/actions";
import Chart from "../chart";

import "./main.css";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      nickname: this.props.match.params.nickname,
    };
  }

  componentDidMount() {
    this.props.getStreamerData(this.state.nickname);
    this.props.changeNickname(this.state.nickname);
    this.setState({ data: this.props.streamerData });
  }

  changeNicknameSearch = (nickname) => {
    this.props.getStreamerData(nickname);
    this.props.changeNickname(nickname);
    this.setState({ nickname: nickname });
  };

  render() {
    return (
      <div className="App">
        <header>
          <AppHeader />
          <AppNav handler={this.changeNicknameSearch}/>
        </header>
        <Row className="statistics-block">
          <Col className="col-8">
            <Chart />
          </Col>
          <Col className="col-4">
            <Sidebar />
          </Col>
        </Row>
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
    changeNickname: (nickname) => dispatch(changeNickname(nickname)),
  })
)(MainPage);
