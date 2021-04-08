import React, { useEffect, useState } from "react";
import { PieChart } from "react-chartkick";
import "./sidebar.css";

import Loader from "../../../services/loader";
import { connect } from "react-redux";

const Sidebar = (props) => {
  const [data, setData] = useState(undefined);

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
      <h2>Crossing</h2>
      <PieChart data={data} />
      <br />
    </>
  );
};

export default connect(
  (state) => ({
    nickname: state.nickname,
    streamerData: state.streamerData,
  }),
  (dispatch) => {}
)(Sidebar);
