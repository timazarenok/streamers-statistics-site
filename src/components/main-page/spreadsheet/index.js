import React from "react";
import Loader from "../../../services/loader";
import { connect } from "react-redux";

import "./spreadsheet.css";

const Spreadsheet = (props) => {
  const user_data = props.streamerData;

  const {
    subsPerDay,
    subsPerWeek,
    subsPerMonth,
    UnsubsPerDay,
    UnsubsPerWeek,
    UnsubsPerMonth,
  } = user_data;

  if (UnsubsPerMonth === undefined) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <p className="table_name">
        YOUTUBE STATS SUMMARY / USER STATISTICS FOR CS:GO BEST MOMENTS
        (2020-12-06 - 2020-12-19)
      </p>
      <table>
        <tbody className="Spreadsheet">
          <tr>
            <th key="0">Period</th>
            <th key="2">Subs</th>
            <th key="3">Unsubs</th>
            <th key="4">Difference</th>
          </tr>
          <tr className="spreadsheet_item_sum">
            <td key="5">Per day</td>
            <td key="7">{subsPerDay.count}</td>
            <td key="8">{UnsubsPerDay.count}</td>
            <td key="9">{subsPerDay.count - UnsubsPerDay.count}</td>
          </tr>
          <tr className="spreadsheet_item_sum">
            <td key="10">Per week</td>
            <td key="12">{subsPerWeek.count}</td>
            <td key="13">{UnsubsPerWeek.count}</td>
            <td key="14">{subsPerWeek.count - UnsubsPerWeek.count}</td>
          </tr>
          <tr className="spreadsheet_item_sum">
            <td key="15">Per mounth</td>
            <td key="17">{subsPerMonth.count}</td>
            <td key="18">{UnsubsPerMonth.count}</td>
            <td key="19">{subsPerMonth.count - UnsubsPerMonth.count}</td>
          </tr>
        </tbody>
      </table>  
    </>
  );
};

export default connect(
  (state) => ({
    streamerData: state.streamerData,
  }),
  (dispatch) => {}
)(Spreadsheet);
