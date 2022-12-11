import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import userReducer from "./userReducer";

const reducers = combineReducers({
    todoReducer,
    userReducer
})

export default reducers;