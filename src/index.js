import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "Redux/rootReducer";
import "./index.scss";
import Routes from "./Routes";

ReactDOM.render(
  <Provider store={createStore(rootReducer)}>
    <React.StrictMode>
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
