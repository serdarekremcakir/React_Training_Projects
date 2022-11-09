import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteTodo} from '../stores/todo'
import {useSelector} from 'react-redux'
import { openModal } from '../stores/modal'

const TodoItem = ({ todo, todos }) => {

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.auth)

  const deleteHandle = () => {
    dispatch(deleteTodo(todo.id))
  }

  const editHandle = () => {
    dispatch(openModal({
      name:'edit-todo',
      data:todo
    }))
  }


  return (
    <li>
      <span style={{ textDecoration: todo.completed ? 'line-through' : false }}>
        {todo.title} - {todo.id} - UserID:{todo.userId}
      </span>
      {
        (todo.userId === user.id || user.id === 'admin') &&
        <>
          <button onClick={editHandle}>Edit</button>
          <button onClick={deleteHandle}>Delete</button>
        </>
      }
    </li>
  )
}

export default TodoItem