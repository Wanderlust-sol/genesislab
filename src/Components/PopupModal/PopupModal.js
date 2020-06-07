import React from "react";
import { connect } from "react-redux";
import { closeModal, setIDX } from "Redux/Actions";
import { resetDate } from "Redux/Actions/dateActions";
import { resetTime } from "Redux/Actions/timeActions";
import TimeSelector from "Components/TimeSelector";
import "./PopupModal.scss";

const PopupModal = (props) => {
  const {
    startDate,
    endDate,
    startTime,
    endTime,
    closeModal,
    resetDate,
    resetTime,
    setIDX,
  } = props;

  const handleClose = () => {
    closeModal();
    resetDate();
    resetTime();
    setIDX(null);
  };

  const handleFinish = () => {
    const data = {
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
    };
    sessionStorage.setItem("data", JSON.stringify(data));
    setIDX(null);
    closeModal();
  };

  return (
    <div className="modal">
      <div className="bg" onClick={closeModal} />
      <div className="modal-container">
        <p className="modal-title">응시 기간 설정</p>
        <TimeSelector title="응시 시작일" start={true} end={false} index={0} />
        <div className="divider" />
        <TimeSelector title="응시 마감일" start={false} end={true} index={3} />
        <div className="btn-area">
          <div className="btn1" onClick={handleClose}>
            취소
          </div>
          <div className="btn2" onClick={handleFinish}>
            완료
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    startDate: state.handleDate.startDate,
    endDate: state.handleDate.endDate,
    startTime: state.handleTime.startTime,
    endTime: state.handleTime.endTime,
  };
};

export default connect(mapStateToProps, {
  closeModal,
  resetDate,
  resetTime,
  setIDX,
})(PopupModal);
