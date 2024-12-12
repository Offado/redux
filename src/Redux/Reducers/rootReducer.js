import { combineReducers } from "redux";
import { taskReducer } from "./indexReducer";


export const rootReducer = combineReducers({
    'taskList': taskReducer
});