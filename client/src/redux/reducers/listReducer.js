import {ADD_LIST,CHANGE_SHOW  } from "../actions/types";
const INITIAL_STATE ={
    value: '',
    lists:[],
    showtodo:false
};
const  listReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ADD_LIST:
            return {
                ...state,
                lists:[action.payload,...state.lists]
            };
        case CHANGE_SHOW:
            return {
                ...state,
                showtodo:!state.showtodo
            }
        
        
        default:
            return state;
    } 
    
    }
    
    export default listReducer;