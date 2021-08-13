import React, { useEffect, useState } from "react";
import { ColumnChart } from "react-chartkick";
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
      case "6 месяцев":
        setData(props.streamerData.subsPerHalfYear);
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
      <button className="stats-button" onClick={() => setPeriod("6 месяцев")}>
        Статистика за 6 месяцев
      </button>
      <h2>Подписчики за {period}</h2>
      {data === undefined ? (
        <div>No Data</div>
      ) : (
        <ColumnChart
          width="100%"
          height="400px"
          discrete={true}
          curve={false}
          xtitle="Дата"
          color="info"
          ytitle="Кол-во подписчиков"
          colors={["5bc0de"]}
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
  (dispatch) => ({})
)(Chart);
