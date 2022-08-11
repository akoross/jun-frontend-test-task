import { createStore } from "redux";

const initialState = {
  horses: [],
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case "UPDATE":
      return { ...state, horses: action.horses };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
