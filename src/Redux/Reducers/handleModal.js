const INITIAL_STATE = {
  modal: false,
};

export default function handleModal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, modal: true };
    case "CLOSE_MODAL":
      return { ...state, modal: false };
    default:
      return state;
  }
}
