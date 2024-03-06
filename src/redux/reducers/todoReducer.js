import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/actionTypes";

const initialState=[];

const todoReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TODO:return [...state,action.payLoad]

        case DELETE_TODO: return state.filter(todo=>todo.id!==action.payLoad)

        default : return state;
    }
}
export default todoReducer;