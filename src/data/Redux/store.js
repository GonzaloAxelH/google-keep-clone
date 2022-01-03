import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const ACTION = {
  ADD_NOTE: "ADD_NOTE",
  LOAD_NOTES: "LOAD_NOTES",
};

const initialState = {
  notes: [],
  theme: "light",
};

function noteReducer(state = initialState.notes, action) {
  switch (action.type) {
    case ACTION.ADD_NOTE:
      return state;
    case ACTION.LOAD_NOTES:
      return action.payload;
    default:
      return state;
  }
}

function themeReducer(state = initialState.theme, action) {
  return state;
}

export default createStore(
  combineReducers({ notes: noteReducer, theme: themeReducer }),

  applyMiddleware(thunk)
);
