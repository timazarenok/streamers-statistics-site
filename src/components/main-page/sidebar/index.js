import React, { useEffect, useState } from "react";
import "./sidebar.css";

import Loader from "../../../services/loader";
import { connect } from "react-redux";
import { BarChart } from "react-chartkick";

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
      <h2>Пересечение аудитории</h2>
      <BarChart
        height="400px"
        discrete={true}
        curve={false}
        xtitle="Процент пересечения аудитории (%)"
        ytitle="Стример"
        data={Object.entries(data)
          .map((e) => [e[0], e[1].percent])
          .slice(0, 10)}
      />
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
