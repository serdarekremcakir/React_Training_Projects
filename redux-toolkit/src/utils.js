import store from "./stores";
import { setUser } from "./stores/auth";
import { addTodo, fetchTodos } from "./stores/todo";
import { closeModal } from "./stores/modal";


export const addTodoHandle =  (todo) => {
    store.dispatch(addTodo(todo))
}

export const loginHandle = user =>{
    store.dispatch(setUser(user))
}

export const logoutHandle = () => {
    store.dispatch(setUser(false))
}

export const fetchData = () => {
    store.dispatch(fetchTodos())
}

export const closeModalHandle = () => {
    store.dispatch(closeModal())
}