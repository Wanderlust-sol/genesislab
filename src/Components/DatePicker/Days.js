import React from "react";
import moment from "moment";
import "moment/locale/ko";
import { connect } from "react-redux";
import { changeDate } from "Redux/Actions";
import "./Days.scss";

//선택 날짜 활성화 함수
const Day = (props) => {
  const { start, end, currentdate, date, startDate, endDate, onClick } = props;
  let className = [];

  if (date.isBefore(startDate, "day")) {
    className.push("inactive");
  }

  if (date.isSame(startDate, "day")) {
    className.push("start");
  }

  if (date.isSame(endDate, "day")) {
    className.push("end");
  }

  if (date.isBetween(startDate, endDate, "day")) {
    className.push("between");
  }

  if (!date.isSame(currentdate, "month")) {
    className.push("muted");
  }

  return (
    <span
      onClick={() => onClick(date, start, end)}
      currentdate={date}
      className={className.join(" ")}
    >
      {date.date()}
    </span>
  );
};

const Days = (props) => {
  const { start, end, date, startDate, endDate, changeDate } = props;
  const thisDate = moment(date);
  const daysInMonth = moment(date).daysInMonth();
  const firstDayDate = moment(date).startOf("month");
  const previousMonth = moment(date).subtract(1, "month"); //지난달의 오늘 일자
  const previousMonthDays = previousMonth.daysInMonth(); //지난달의 총 일수
  const nextMonth = moment(date).add(1, "month");
  let labels = [];
  let days = [];

  //요일 만들기
  for (let i = 1; i <= 7; i++) {
    const dayOfWeek = moment().day(i).format("dd");
    labels.push(
      <span className="label" key={i}>
        {dayOfWeek}
      </span>
    );
  }

  //이번 달 1일 앞에 들어갈 지난 달 마지막 날짜 생성
  for (let i = firstDayDate.day(); i > 1; i--) {
    previousMonth.date(previousMonthDays - i + 2);

    days.push(
      <Day
        key={moment(previousMonth).format("DD MM YYYY")}
        onClick={(date, start, end) => changeDate(date, start, end)}
        currentdate={date}
        date={moment(previousMonth)}
        startDate={startDate}
        endDate={endDate}
        start={start}
        end={end}
      />
    );
  }

  //이번 달 1~31일자 생성
  for (let i = 1; i <= daysInMonth; i++) {
    thisDate.date(i);

    days.push(
      <Day
        key={moment(thisDate).format("DD MM YYYY")}
        onClick={(date, start, end) => changeDate(date, start, end)}
        currentdate={date}
        date={moment(thisDate)}
        startDate={startDate}
        endDate={endDate}
        start={start}
        end={end}
      />
    );
  }

  const daysCnt = days.length;
  let baseNum;
  if (daysCnt > 35) {
    baseNum = 42;
  } else {
    baseNum = 35;
  }
  //이번 달 마지막 날 이후 들어갈 다음달 초기 날짜 생성
  for (let i = 1; i <= baseNum - daysCnt; i++) {
    nextMonth.date(i);

    days.push(
      <Day
        key={moment(nextMonth).format("DD MM YYYY")}
        onClick={(date, start, end) => changeDate(date, start, end)}
        currentdate={date}
        date={moment(nextMonth)}
        startDate={startDate}
        endDate={endDate}
        start={start}
        end={end}
      />
    );
  }

  return (
    <nav className="dp-days">
      <div className="label-wrapper">{labels}</div>
      <div className="days-wrapper">{days.concat()}</div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    date: state.handleDate.date,
    startDate: state.handleDate.startDate,
    endDate: state.handleDate.endDate,
  };
};

export default connect(mapStateToProps, { changeDate })(Days);
