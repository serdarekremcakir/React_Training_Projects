import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../stores/todo'
import {useSelector} from 'react-redux'
import { addTodoHandle } from '../utils'


const AddTodo = () => {

  const {user} = useSelector(state => state.auth)

  const [todo, setTodo] = useState('')
  const dispatch = useDispatch();

  const submitHandle = e => {
    e.preventDefault();
    // dispatch(addTodo({
    //   title:todo,
    //   completed:false,
    //   id: new Date().getTime(),
    //   user:user.id
    // }))
    addTodoHandle({
      title:todo,
      completed:false,
      id: new Date().getTime(),
      userId:user.id
    })
    setTodo('')
  }



  return (
    <form onSubmit={submitHandle}>
      <input type="text" value={todo} onChange={e => setTodo(e.target.value)}  />
      <button disabled={!todo || !user} type="submit">Add</button>
    </form>
  )
}

export default AddTodo