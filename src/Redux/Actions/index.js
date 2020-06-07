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

export const setIDX = (idx) => {
  return {
    type: "SET_IDX",
    payload: idx,
  };
};
