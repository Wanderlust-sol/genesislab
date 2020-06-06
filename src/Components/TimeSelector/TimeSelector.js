import React from "react";
import DatePicker from "Components/DatePicker";
import DropDown from "Components/DropDown";
import "./TimeSelector.scss";

const TimeSelector = ({ title, start, end }) => {
  return (
    <div>
      <p className="timeselector-title">{title}</p>
      <div className="time-sel">
        <DatePicker start={start} end={end} />
        <DropDown time="hours" start={start} end={end} />
        <DropDown time="mins" start={start} end={end} />
      </div>
    </div>
  );
};

export default TimeSelector;
