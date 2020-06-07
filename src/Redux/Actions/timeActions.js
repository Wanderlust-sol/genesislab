export const RESET = "RESET";
export const SET_HOUR = "SET_HOUR";
export const SET_MIN = "SET_MIN";

export const resetTime = () => {
  return {
    type: "RESET",
  };
};

export const setHourValue = (hour, start, end) => {
  return {
    type: "SET_HOUR",
    payload: hour,
    start: start,
    end: end,
  };
};

export const setMinValue = (min, start, end) => {
  return {
    type: "SET_MIN",
    payload: min,
    start: start,
    end: end,
  };
};
