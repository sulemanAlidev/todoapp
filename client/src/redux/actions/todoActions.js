import {ADD_TODO} from "./types";

export const addTodo = newTodo =>({
   
    type:ADD_TODO,
    payload:newTodo
});
