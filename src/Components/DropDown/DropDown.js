import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setIDX } from "Redux/Actions";
import { setHourValue, setMinValue } from "Redux/Actions/timeActions";
import "./DropDown.scss";
import arrowDropdown from "Img/ic-arrow-drop-down.svg";

const hourArr = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const minArr = [0, 10, 20, 30, 40, 50];

const DropDown = (props) => {
  const {
    time,
    start,
    end,
    startTime,
    endTime,
    setHourValue,
    setMinValue,
    index,
    idx,
    setIDX,
  } = props;

  const [showList, setShowList] = useState(false);

  const handleShowList = () => {
    setShowList(!showList);
    setIDX(index);
  };

  const hourCheck = () => {
    if (start) return startTime.hour;
    else if (end) return endTime.hour;
  };

  const minCheck = () => {
    if (start) return startTime.min;
    else if (end) return endTime.min;
  };

  useEffect(() => {
    if (sessionStorage.getItem("data")) {
      const data = JSON.parse(sessionStorage.getItem("data"));
      if (start) {
        setHourValue(data.startTime.hour, start, end);
        setMinValue(data.startTime.min, start, end);
      }
      if (end) {
        setHourValue(data.endTime.hour, start, end);
        setMinValue(data.endTime.min, start, end);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    idx === index ? setShowList(true) : setShowList(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  return (
    <div className="dropdown">
      <div
        className={!showList ? "dropdown-box" : "dropdown-box active"}
        onClick={handleShowList}
      >
        <span className="dropdown-title">
          {time === "hours" ? hourCheck(start, end) : minCheck(start, end)}
        </span>
        <img
          className="dropdown-icon"
          src={arrowDropdown}
          alt="arrow-dropdown"
        />
      </div>
      {showList && (
        <div className="dropdown-contents">
          {time === "hours" ? (
            <ul>
              {hourArr.map((hour, index) => {
                return (
                  <li
                    className="option"
                    key={index}
                    onClick={() => {
                      setHourValue(`오전 ${hour} 시`, start, end);
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
                      setHourValue(`오후 ${hour} 시`, start, end);
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
                      setMinValue(`${min} 분`, start, end);
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

const mapStateToProps = (state) => {
  return {
    startTime: state.handleTime.startTime,
    endTime: state.handleTime.endTime,
    idx: state.handleSelector.idx,
  };
};

export default connect(mapStateToProps, { setHourValue, setMinValue, setIDX })(
  DropDown
);
