import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import todosReducer from "./state-management/reducer/todosReducer";



const store = createStore(todosReducer, applyMiddleware(thunk))

export default store;