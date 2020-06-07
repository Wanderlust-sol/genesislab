export const RESET = "RESET";
export const SET_DATE = "SET_DATE";
export const SET_STARTDATE = "SET_STARTDATE";
export const SET_ENDDATE = "SET_ENDDATE";
export const CHANGE_DATE = "CHANGE_DATE";

export const resetDate = () => {
  return {
    type: "RESET",
  };
};

export const setDate = (month) => {
  return {
    type: "SET_DATE",
    payload: month,
  };
};

export const setStartDate = (date) => {
  return {
    type: "SET_STARTDATE",
    payload: date,
  };
};

export const setEndDate = (date) => {
  return {
    type: "SET_ENDDATE",
    payload: date,
  };
};

export const changeDate = (date, start, end) => {
  return {
    type: "CHANGE_DATE",
    payload: date,
    start: start,
    end: end,
  };
};
