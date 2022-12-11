import React,{useCallback, useState} from 'react'
import { useDispatch } from 'react-redux'
import { todoActions } from '../redux/actions'

const TodoForm = () => {
    console.log("form render");
    const [todoItem, setTodoItem] = useState("")
    const dispatch = useDispatch();


    const submitHandle = (e) => {
        e.preventDefault();
        if (todoItem) {
            dispatch(todoActions.addTodo(todoItem))
        }
        setTodoItem("");
    }

  return (
    <>
        <form onSubmit={submitHandle} className="form">
            <input onChange={e => setTodoItem(e.target.value)} type="text" value={todoItem} placeholder="New Todo" />
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default TodoForm