import React from "react";
import DatePicker from "Components/DatePicker";
import DropDown from "Components/DropDown";
import "./TimeSelector.scss";

const TimeSelector = ({ title, start, end, index }) => {
  return (
    <div>
      <p className="timeselector-title">{title}</p>
      <div className="time-sel">
        <DatePicker index={1 + index} start={start} end={end} />
        <DropDown index={2 + index} time="hours" start={start} end={end} />
        <DropDown index={3 + index} time="mins" start={start} end={end} />
      </div>
    </div>
  );
};

export default TimeSelector;
