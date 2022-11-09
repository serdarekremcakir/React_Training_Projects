import React,{useState} from 'react'
import Header from './todo/Header'
import AddTodo from './todo/AddTodo'
import TodoList from './todo/TodoList'
import Modal from './todo/Modal'
import {useSelector} from 'react-redux'
import './utils'

const App = () => {

    const [language, setLanguage] = useState('tr')
    const [dark, setDark] = useState(true)

    const modal= useSelector(state => state.modal)

  return (
    <main>

      {modal.open && <Modal />}
        <Header  />
        <AddTodo />
        <TodoList />
    </main>
  )
}

export default App