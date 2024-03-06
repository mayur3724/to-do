import React, { useEffect, useState, updateTodo } from "react";
import { addTodo, deleteTodo } from "../redux/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const TodoApp = () => {
    const [input, setInput] = useState("");
    const [updateId, setUpdateId] = useState("");

    const todoArr = useSelector(state => state);

    useEffect(() => {
        console.log(todoArr)
    }, [todoArr]);

    const dispatch = useDispatch();

    function addTodoList(e){
        e.preventDefault();
        if(updateId){
            dispatch(updateTodo(updateId, input))
        }
        else{
            let obj = {
                id: crypto.randomUUID(),
                title: input
            }
            dispatch(addTodo(obj));
        }
        setInput("");
        }
        // let length = todoArr.length;
        // let last_element = todoArr[length - 1];
        // let id = last_element ? last_element.id + 1 : 0;

    return (
        <div>
            <h1>{updateId ? "Update To-Do" : "Add To-Do"}</h1>
            <form className="add-todo" onSubmit={addTodoList}>
                <input type="text"
                    placeholder={updateId ? "Update To-Do" : "Add To-Do"}
                    onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit">{updateId ? "Update To-Do" : "Add To-Do"}</button>
            </form>

            <ul>
                {todoArr.length > 0 &&
                    todoArr.map(item => (
                        <li key={item.id}>
                            {item.title}
                            <button onClick={() => dispatch(deleteTodo(item.id))}>Delete</button>
                            <button onClick={() => {
                                setUpdateId(item.id)
                                setInput(item.title)
                                }}>U</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default TodoApp;