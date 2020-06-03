import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "Redux/rootReducer";
import Routes from "./Routes";
import "./index.scss";
import "Styles/reset.scss";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
