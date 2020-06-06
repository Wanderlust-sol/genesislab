import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setDate, setStartDate, setEndDate } from "Redux/Actions";
import Head from "./Head";
import Days from "./Days";
import arrowDropdown from "Img/ic-arrow-drop-down.svg";
import "./DatePicker.scss";

const DatePicker = (props) => {
  const { start, end, startDate, endDate, setStartDate, setEndDate } = props;

  const [showDP, setShowDP] = useState(false);

  const showDatePicker = () => {
    setShowDP(!showDP);
  };

  const handleInputTitle = () => {
    if (start) return startDate.format("LL");
    if (end) return endDate.format("LL");
  };

  const getSessionData = () => {
    if (sessionStorage.getItem("data")) {
      const data = JSON.parse(sessionStorage.getItem("data"));
      if (start) return setStartDate(data.startDate);
      if (end) return setEndDate(data.endDate);
    }
  };
  useEffect(() => {
    getSessionData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="datepicker">
      <div
        className={showDP ? "dp-input active" : "dp-input"}
        onClick={showDatePicker}
      >
        <span className="dp-input-title">{handleInputTitle()}</span>
        <img className="dp-input-icon" src={arrowDropdown} alt="arrow-down" />
      </div>

      {showDP && (
        <div className="dp-container">
          <Head />
          <Days start={start} end={end} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    date: state.handleDate.date,
    startDate: state.handleDate.startDate,
    endDate: state.handleDate.endDate,
  };
};

export default connect(mapStateToProps, {
  setDate,
  setStartDate,
  setEndDate,
})(DatePicker);
