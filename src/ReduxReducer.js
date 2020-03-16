const initialState = {
  task: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        task: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
