import { combineReducers } from "redux";
import handleModal from "Redux/Reducers/handleModal";
import handleDate from "Redux/Reducers/handleDate";
import handleTime from "Redux/Reducers/handleTime";
import handleSelector from "Redux/Reducers/handleSelector";

const rootReducer = combineReducers({
  handleModal,
  handleDate,
  handleTime,
  handleSelector,
});

export default rootReducer;
