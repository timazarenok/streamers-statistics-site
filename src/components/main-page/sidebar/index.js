import React, { useEffect, useState } from "react";
import "./sidebar.css";

import Loader from "../../../services/loader";
import { connect } from "react-redux";
import { ProgressBar, Button } from "react-bootstrap";

const Sidebar = (props) => {
  const [data, setData] = useState(undefined);
  const [amount, setAmount] = useState(10);

  useEffect(() => {
    setData(props.streamerData.crossing);
  }, [props.streamerData]);

  if (data === undefined) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <h2>Пересечение аудитории</h2>
      <ul className="percent-list">
        {Object.entries(data)
          .slice(0, amount)
          .map((e) => (
            <li>
              <span>{e[0]}</span>
              <ProgressBar
                variant="info"
                now={e[1].percent}
                label={`${e[1].percent}%`}
              />
            </li>
          ))}
      </ul>
      {amount > 10 ? (
        <Button
          className="more-button"
          onClick={() => setAmount(10)}
        >
          Свернуть
        </Button>
      ) : (
        <Button
          className="more-button"
          onClick={() => setAmount(Object.entries(data).length)}
        >
          Показать все
        </Button>
      )}{" "}
      <br />
    </>
  );
};

export default connect(
  (state) => ({
    nickname: state.nickname,
    streamerData: state.streamerData,
  }),
  (dispatch) => ({})
)(Sidebar);
