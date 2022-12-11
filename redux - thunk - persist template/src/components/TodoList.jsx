import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { todoActions } from '../redux/actions';

const TodoList = () => {
    const data = useSelector(state => state.todoReducer)
    const dispatch = useDispatch();
    console.log("list render")
    return (
        <div >
            <ul>
                {
                    data.map((todo, index) => 
                    <li 
                    onClick={() => dispatch(todoActions.changeStatus(todo))}
                    style={{backgroundColor:`${todo.completed ? 'green' : 'red'}`}} key={index}>
                        {todo.title}
                        <button onClick={() => dispatch(todoActions.removeTodo(todo))}>X</button>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TodoList