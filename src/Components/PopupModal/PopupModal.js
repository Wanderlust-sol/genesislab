import React from "react";
import { connect } from "react-redux";
import { closeModal } from "Redux/Actions";
import TimeSelector from "Components/TimeSelector";
import "./PopupModal.scss";

const PopupModal = (props) => {
  const { closeModal } = props;

  return (
    <div className="modal">
      <div
        className="bg"
        onClick={() => {
          closeModal();
        }}
      />
      <div className="modal-container">
        <p className="modal-title">응시 기간 설정</p>
        <TimeSelector />
        <div className="division-line" />
      </div>
    </div>
  );
};

export default connect(null, { closeModal })(PopupModal);
