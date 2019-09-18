import { createStore } from "redux";
import reducer from "../reducers/index";

const initialState = {},
  store = createStore(reducer, initialState);

export default store;
