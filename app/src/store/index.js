import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import footballRed from "../reducers/footballRed";

const store = createStore(footballRed, applyMiddleware(thunk));

export default store;
