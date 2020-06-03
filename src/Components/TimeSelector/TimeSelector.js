import React from "react";
import DatePicker from "./DatePicker";
import DropDown from "Components/DropDown";
import "./TimeSelector.scss";

const TimeSelector = () => {
  return (
    <div>
      <p className="timeselector-title">응시 시작일</p>
      <div className="time-sel">
        <DatePicker />
        <DropDown data="hours" />
        <DropDown data="mins" />
      </div>
    </div>
  );
};

export default TimeSelector;
