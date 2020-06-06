import moment from "moment";
import "moment/locale/ko";
const date = moment().format("LT").split(":");
const min = (Math.round(date[1] * 0.1) / 10) * 100;

const INITIAL_STATE = {
  startTime: {
    hour: `${date[0]} 시`,
    min: `${min} 분`,
  },
  endTime: {
    hour: `${date[0]} 시`,
    min: `${min} 분`,
  },
};

export default function handleTime(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_HOUR":
      if (action.start) {
        return {
          ...state,
          startTime: { ...state.startTime, hour: action.payload },
        };
      } else if (action.end) {
        return {
          ...state,
          endTime: { ...state.endTime, hour: action.payload },
        };
      }
      break;
    case "SET_MIN":
      if (action.start) {
        return {
          ...state,
          startTime: { ...state.startTime, min: action.payload },
        };
      } else if (action.end) {
        return {
          ...state,
          endTime: { ...state.endTime, min: action.payload },
        };
      }
      break;
    default:
      return state;
  }
}
