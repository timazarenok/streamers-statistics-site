import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from "../login-page";
import StreamersPage from "../streamer-page";
import MainPage from "../main-page";

import { connect } from "react-redux";
import { changeNickname } from "../../redux/actions";

import "./reset.css";
import "./App.css";
import { Switch } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (props) => {
  const nickname = props.nickname;

  const handleSubmit = () => {
    props.changeNickname(nickname);
  };

  const handleChange = (e) => {
    props.changeNickname(e.target.value);
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginPage
            value={nickname}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
          />
        </Route>
        <Route path="/admin" component={StreamersPage}/>
        <Route path="/main/:nickname" component={MainPage}/>
      </Switch>
    </Router>
  );
};

export default connect(
  (state) => ({
    nickname: state.nickname,
  }),
  (dispatch) => ({
    changeNickname: (nickname) => dispatch(changeNickname(nickname)),
  })
)(App);
