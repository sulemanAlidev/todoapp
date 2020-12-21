import {ADD_LIST,CHANGE_SHOW} from "./types";


export const addList = newList =>({
   
        type:ADD_LIST,
         payload:newList    
});
export const showtodo = () =>({
   
        type:CHANGE_SHOW,           
});