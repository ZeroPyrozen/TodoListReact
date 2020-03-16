import { createStore } from "redux";
import reducer from "./ReduxReducer";

const store = createStore(reducer);

export default store;
