export const showModal = () => {
  return {
    type: "SHOW_MODAL",
  };
};

export const closeModal = () => {
  return {
    type: "CLOSE_MODAL",
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
