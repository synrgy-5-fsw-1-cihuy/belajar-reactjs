import { combineReducers } from "redux";
import appReducer from "./AppReducer";
import todoReducer from "./TodoReducer";

export default combineReducers({
    appReducer,
    todoReducer
});
