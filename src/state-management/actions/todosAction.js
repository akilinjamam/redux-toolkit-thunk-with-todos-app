import axios from "axios";
import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "../constants/todosConstants"


export const getAllTodos = () => async (dispath) => {
    dispath({ type: GET_TODOS_REQUEST });
    try {
        const res = await axios("https://jsonplaceholder.typicode.com/todo");
        dispath({ type: GET_TODOS_SUCCESS, payload: res?.data })
    } catch (error) {
        dispath({ type: GET_TODOS_FAILED, payload: error.message })
    }

};