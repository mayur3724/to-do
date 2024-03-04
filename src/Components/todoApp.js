import React, { useEffect, useState } from "react";
import { addTodo, deleteTodo } from "../redux/actions/todoActions";
import { useDispatch, useSelector } from "react-redux";

const TodoApp = () => {
    const [input, setInput] = useState("");
    const todoArr = useSelector(state => state);

    useEffect(() => {
        console.log(todoArr)
    }, [todoArr]);

    const dispatch = useDispatch();

    function addTodoList(e) {
        e.preventDefault();

        // let length = todoArr.length;
        // let last_element = todoArr[length - 1];
        // let id = last_element ? last_element.id + 1 : 0;

        let obj = {
            id: crypto.randomUUID(),
            title: input
        }
        dispatch(addTodo(obj));
        setInput("");
    }

    return (
        <div>
            <form className="add-todo" onSubmit={addTodoList}>
                <input type="text" placeholder="Add-todo"
                    onChange={(e) => setInput(e.target.value)}></input>
                <button type="submit">Add todo</button>
            </form>

            <ul>
                { todoArr.length > 0 && 
                    todoArr.map(item=>(
                        <li key={item.id}>
                            {item.title}
                            <button onClick={()=>dispatch(deleteTodo(item.id))}>Delete</button>
                        </li>
                    ) )
                }
            </ul>
        </div>
    )
}
export default TodoApp;