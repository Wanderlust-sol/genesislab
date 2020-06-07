import React from "react";
import { connect } from "react-redux";
import { setDate } from "Redux/Actions/dateActions";
import arrowBack from "Img/btn-arrow-back.svg";
import arrowForward from "Img/btn-arrow-forward.svg";

const Head = ({ date, setDate }) => {
  return (
    <nav className="dp-head">
      <div className="dph-date">
        {date.format("YYYY")}년 {date.format("MM")}월
      </div>
      <div className="arrow-btn-box">
        <div className="arrow-btn" onClick={() => setDate(date.month() - 1)}>
          <img src={arrowBack} alt="arrow-back" />
        </div>
        <div className="arrow-btn" onClick={() => setDate(date.month() + 1)}>
          <img src={arrowForward} alt="arrow-forward" />
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    date: state.handleDate.date,
  };
};

export default connect(mapStateToProps, { setDate })(Head);
