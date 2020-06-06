import React from "react";
import { connect } from "react-redux";
import { closeModal } from "Redux/Actions";
import TimeSelector from "Components/TimeSelector";
import "./PopupModal.scss";

const PopupModal = (props) => {
  const { startDate, endDate, startTime, endTime, closeModal } = props;

  const handleFinish = () => {
    const data = {
      startDate: startDate,
      endDate: endDate,
      startTime: startTime,
      endTime: endTime,
    };
    sessionStorage.setItem("data", JSON.stringify(data));
    closeModal();
  };

  return (
    <div className="modal">
      <div className="bg" onClick={closeModal} />
      <div className="modal-container">
        <p className="modal-title">응시 기간 설정</p>
        <TimeSelector title="응시 시작일" start={true} end={false} />
        <div className="divider" />
        <TimeSelector title="응시 마감일" start={false} end={true} />
        <div className="btn-area">
          <div className="btn1" onClick={closeModal}>
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

export default connect(mapStateToProps, { closeModal })(PopupModal);
