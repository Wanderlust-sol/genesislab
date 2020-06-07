const INITIAL_STATE = {
  idx: null,
};

export default function handleSelector(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_IDX":
      return { ...state, idx: action.payload };
    default:
      return state;
  }
}
