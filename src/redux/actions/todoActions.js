import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";


export const addTodo=(newTodo)=>{
    return({
        type:ADD_TODO,
        payLoad:newTodo
    })
}

export const deleteTodo=(delete_id)=>{
    return({
        type:DELETE_TODO,
        payLoad:delete_id
    })
}