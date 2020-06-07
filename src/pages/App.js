import React from "react";
import PopupModal from "Components/PopupModal";
import { connect } from "react-redux";
import { showModal } from "Redux/Actions";
import "./App.scss";

const App = ({ modal, showModal }) => {
  return (
    <>
      <div className="App">
        <div className="popup-button" onClick={showModal}>
          <span className="popup-button-title">설정 대화상자 열기</span>
        </div>
      </div>
      {modal && <PopupModal />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.handleModal.modal,
  };
};

export default connect(mapStateToProps, { showModal })(App);
