import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editTodo } from '../stores/todo'

const EditTodo = ({close,data}) => {

  const [todo, setTodo] = useState(data.title)
  const [done, setDone] = useState(data.completed)

  const dispatch = useDispatch();


  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(editTodo({title:todo,completed:done, id:data.id}))
    close();
  }

  return (
    <div>
      <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={e => setTodo(e.target.value)}/> <br />
        <label htmlFor="">
          <input type="checkbox" name="" checked={done} onChange={e => setDone(e.target.checked)}/>
          Done
        </label> <br />
        <button type='submit'>Submit</button>
      </form>
      <button onClick={close}>close</button>
      </div>
  )
}

export default EditTodo