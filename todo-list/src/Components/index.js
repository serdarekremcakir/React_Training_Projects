import React,{useState,useEffect} from 'react'
import Header from './Header'
import Footer from './Footer'

function Todos() {
    const [todos, setTodos] = useState([
    ]);

    const activeTodos = todos.filter((x) => !x.completed)
    const completedTodos = todos.filter((x) => x.completed)

    const [listStatus, setlistStatus] = useState("");


    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem("todo-react"));
        setTodos(localData);
    },[])


    useEffect(()=>{
        localStorage.setItem("todo-react", JSON.stringify(todos));
    },[todos])

    
   
  return (
    <div>
        <section className="todoapp">  
        <Header 
        todos={listStatus == "Active" ? activeTodos : listStatus == "Completed" ? completedTodos : todos} 
        setTodos = {setTodos} 
        />
        <Footer 
        todos ={todos} 
        setTodos = {setTodos} 
        setlistStatus={setlistStatus}
        counter = {activeTodos.length}
        />
        </section>
    </div>
  )
}

export default Todos