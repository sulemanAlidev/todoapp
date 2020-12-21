import {ADD_TODO} from "../actions/types";
const INITIAL_STATE ={

    todolist:[]

};
const  listReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todolist:[action.payload,...state.todolist]
            };
        
        
        default:
            return state;
    } 
    
    }
    
    export default listReducer;