import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeNickname, getData } from "../../../redux/actions";
import { Search } from "react-bootstrap-icons";
import "./app-nav.css";
import { compose } from "redux";

const AppNav = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const submitSearch = (e) => {
    props.changeNickname(search);
    props.history.push("/main/" + search);
  };

  return (
    <div className="AppNav">
      <ul className="nav_menu">
        <Link to="/admin" className="nav_item">
          Все стримеры
        </Link>
        <Search className="search-icon" size={25}/>
        <Form onSubmit={submitSearch}>
          <Form.Control
            className="search-nav"
            value={search}
            onChange={handleSearch}
          />
        </Form>
      </ul>
    </div>
  );
};

export default compose(
  withRouter,
  connect(
    (state) => ({
      nickname: state.nickname,
    }),
    (dispatch) => ({
      changeNickname: (nickname) => dispatch(changeNickname(nickname)),
    })
  )
)(AppNav);
