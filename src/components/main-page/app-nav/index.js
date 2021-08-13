import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { changeNickname, getData, getNicknames } from "../../../redux/actions";
import { Search } from "react-bootstrap-icons";
import "./app-nav.css";
import { compose } from "redux";
import { Dropdown } from "react-bootstrap";

const results = ["fff", "fffff"];

const AppNav = (props) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    props.getNicknames();
  }, [props.streamers.length != 0]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const submitSearch = (e) => {
    props.handler(search);
    props.history.push("/main/" + search);
  };

  const handleClickDrop = (e) => {
    props.handler(e.target.name);
    props.history.push("/main/" + e.target.name);
    setSearch("");
  };

  return (
    <div className="AppNav">
      <ul className="nav_menu">
        <Link to="/admin" className="nav_item">
          Все стримеры
        </Link>
        <Search className="search-icon" size={25} />
        <Form onSubmit={submitSearch}>
          <Form.Control
            className="search-nav"
            value={search}
            onChange={handleSearch}
          />
          {search.length > 0 ? (
            <ul className="search-results-list">
              {props.streamers
                .filter((el) => el.includes(search))
                .map((el) => (
                  <li key={el}>
                    <Dropdown.Item onClick={handleClickDrop} name={el}>
                      {el}
                    </Dropdown.Item>
                  </li>
                ))}
            </ul>
          ) : null}
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
      streamers: state.streamers,
    }),
    (dispatch) => ({
      changeNickname: (nickname) => dispatch(changeNickname(nickname)),
      getNicknames: () => dispatch(getNicknames()),
    })
  )
)(AppNav);
