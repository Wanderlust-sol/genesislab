import moment from "moment";
import "moment/locale/ko";
import {
  RESET,
  SET_DATE,
  SET_STARTDATE,
  SET_ENDDATE,
  CHANGE_DATE,
} from "Redux/Actions/dateActions";

const INITIAL_STATE = {
  date: moment(),
  startDate: moment().subtract(0, "day"),
  endDate: moment().add(0, "day"),
};

export default function handleDate(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RESET: {
      return {
        ...state,
        date: moment(),
        startDate: moment().subtract(0, "day"),
        endDate: moment().add(0, "day"),
      };
    }
    case SET_DATE:
      return { ...state, date: state.date.month(action.payload).clone() };
    case SET_STARTDATE:
      return { ...state, startDate: moment(action.payload).clone() };
    case SET_ENDDATE:
      return { ...state, endDate: moment(action.payload).clone() };
    case CHANGE_DATE:
      const { startDate } = state;
      if (action.start) {
        const momentFormat = moment().format("L");
        const payloadFormat = action.payload.format("L");

        if (moment(momentFormat).isSameOrBefore(payloadFormat)) {
          return {
            ...state,
            startDate: moment(action.payload),
          };
        } else return state;
      } else if (action.end) {
        if (startDate.isSame(action.payload)) {
          return {
            ...state,
            endDate: moment(action.payload),
          };
        } else if (!startDate.isBefore(action.payload)) {
          return state;
        } else if (startDate.isBefore(action.payload)) {
          return {
            ...state,
            endDate: moment(action.payload),
          };
        }
      }
      break;
    default:
      return state;
  }
}
