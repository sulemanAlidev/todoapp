import { combineReducers } from "redux";
import listReducer from "./reducers/listReducer";
import todoReducer from "./reducers/todoReducer"


const rootReducer = combineReducers({
    list:listReducer,
    todo:todoReducer

});
export default rootReducer;