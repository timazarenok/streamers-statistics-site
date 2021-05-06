import React, { useEffect, useState } from "react";
import { AreaChart } from "react-chartkick";
import { connect } from "react-redux";
import Loader from "../../services/loader";

import "./chart.css";

const Chart = (props) => {
  const [data, setData] = useState(undefined);
  const [period, setPeriod] = useState("Месяц");

  useEffect(() => {
    switch (period) {
      case "Месяц":
        setData(props.streamerData.subsPerMonth);
        break;
      case "Неделю":
        setData(props.streamerData.subsPerWeek);
        break;
      case "День":
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
      <button className="stats-button" onClick={() => setPeriod("Месяц")}>
        Статистика за месяц
      </button>
      <button className="stats-button" onClick={() => setPeriod("Неделю")}>
        Статистика за неделю
      </button>
      <button className="stats-button" onClick={() => setPeriod("День")}>
        Статистика за день
      </button>
      <h2>Подписчики за {period}</h2>
      {data === undefined ? (
        <div>No Data</div>
      ) : (
        <AreaChart
          width="100%"
          height="400px"
          discrete={true}
          curve={false}
          xtitle="Дата"
          ytitle="Кол-во подписчиков"
          data={Object.fromEntries(data.map((el) => [el.date, el.data.length]))}
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
