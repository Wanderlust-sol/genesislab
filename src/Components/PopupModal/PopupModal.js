import React from "react";
import { connect } from "react-redux";
import { closeModal } from "Redux/Actions";
import "./PopupModal.scss";

const PopupModal = (props) => {
  const { closeModal } = props;

  return (
    <div className="modal">
      <div
        className="background"
        onClick={() => {
          closeModal();
        }}
      />
      <div className="modal-container">hiii</div>
    </div>
  );
};

export default connect(null, { closeModal })(PopupModal);
