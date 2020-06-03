import React, { useState } from "react";
import "./DropDown.scss";
import arrowDropdown from "Img/ic-arrow-drop-down.svg";

const hourArr = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const minArr = [0, 10, 20, 30, 40, 50];

const DropDown = (props) => {
  const { data } = props;
  const [showList, setShowList] = useState(false);
  const [hourValue, setHourValue] = useState("");
  const [minValue, setMinValue] = useState("");

  return (
    <div className="dropdown">
      <div
        className={!showList ? "dropdown-box" : "dropdown-box-active"}
        onClick={() => {
          setShowList(!showList);
        }}
      >
        <span className="dropdown-title">
          {data === "hours" ? hourValue : minValue}
        </span>
        <img
          className="dropdown-icon"
          src={arrowDropdown}
          alt="arrow-dropdown"
        />
      </div>
      {showList && (
        <div className="dropdown-contents">
          {data === "hours" ? (
            <ul>
              {hourArr.map((hour, index) => {
                return (
                  <li
                    className="option"
                    key={index}
                    onClick={() => {
                      setHourValue(`오전 ${hour} 시`);
                      setShowList(false);
                    }}
                  >
                    오전 {hour} 시
                  </li>
                );
              })}
              {hourArr.map((hour, index) => {
                return (
                  <li
                    className="option"
                    key={index}
                    onClick={() => {
                      setHourValue(`오후 ${hour} 시`);
                      setShowList(false);
                    }}
                  >
                    오후 {hour} 시
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul>
              {minArr.map((min, index) => {
                return (
                  <li
                    onClick={() => {
                      setMinValue(`${min} 분`);
                      setShowList(false);
                    }}
                    key={index}
                  >
                    {min} 분
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default DropDown;
