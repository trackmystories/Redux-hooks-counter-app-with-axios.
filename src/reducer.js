import { combineReducers } from "redux";

import { TOTAL_COUNT } from "./actions";

let dataState = { data: [] };

const total_counts = (state = dataState, action) => {
  switch (action.type) {
    case TOTAL_COUNT:
      return { ...state, data: action.data };
    default:
      return state;
  }
};

const counter = (state = 0, action) => {
  switch (action.type) {
    case "ADD":
      return state + 1;
    case "SUBTRACT":
      return state - 1;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  counter,
  total_counts,
});

export default rootReducer;
