import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App() {
  return (
    <div  style={{height:'100%', width:'100%'}}>
      <TodoForm />
      <TodoList />
      <UserList />
      
    </div>
  );
}

export default App;
