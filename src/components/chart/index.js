import React, { useEffect, useState } from "react";
import { LineChart, PieChart, AreaChart } from "react-chartkick";
import { connect } from "react-redux";
import Loader from "../../services/loader";

import "./chart.css";

const Chart = (props) => {
  const [data, setData] = useState(undefined);
  const [period, setPeriod] = useState("Month");

  useEffect(() => {
    switch (period) {
      case "Month":
        setData(props.streamerData.subsPerMonth);
        break;
      case "Week":
        setData(props.streamerData.subsPerWeek);
        break;
      case "Day":
        setData(props.streamerData.subsPerDay);
        break;
      default:
        setData(props.streamerData.subsPerMonth);
    }
  }, [props.streamerData, period]);

  if (data === undefined) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="charts-block">
      <button className="stats-button" onClick={() => setPeriod("Month")}>
        See Full Monthly Statistics
      </button>
      <button className="stats-button" onClick={() => setPeriod("Week")}>
        See Full Weekly Statistics
      </button>
      <button className="stats-button" onClick={() => setPeriod("Day")}>
        See Full Daily Statistics
      </button>
      <h2>Subscribers per {period}</h2>
      {data.name[0] === undefined ? (
        <div>No Data</div>
      ) : (
        <AreaChart
          width="900px"
          height="300px"
          discrete={true}
          curve={false}
          legend={true}
          xtitle="Date"
          ytitle="Subscribers"
          data={{ [data.name[0].date.substring(0, 10)]: data.count }}
        />
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    nickname: state.nickname,
    streamerData: state.streamerData,
  }),
  (dispatch) => {}
)(Chart);
