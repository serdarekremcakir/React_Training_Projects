import React,{useEffect} from 'react'
import TodoItem from './TodoItem'
import {useSelector} from 'react-redux'
import { fetchData } from '../utils'

const TodoList = ({}) => {

  useEffect(() => {
    fetchData();
  }, [])
  

  const {todos} = useSelector(state => state.todo)

  return (
    <>
    {todos.loading && <> Loading </> }
    {todos.error && todos.error  }
    <ul>
      {todos.data.length > 0 && todos.data.map((todo,key) => <TodoItem key={key} todo={todo} />)}
    </ul>
    </>
  )
}

export default TodoList