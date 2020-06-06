import { combineReducers } from "redux";
import handleModal from "Redux/Reducers/handleModal";
import handleDate from "Redux/Reducers/handleDate";
import handleTime from "Redux/Reducers/handleTime";

const rootReducer = combineReducers({
  handleModal,
  handleDate,
  handleTime,
});

export default rootReducer;
