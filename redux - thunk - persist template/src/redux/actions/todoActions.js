const addTodo = (todo) => {
    return {type:"ADD_TODO", payload:todo}
};

const removeTodo = (todo) => {

    return {
        type:"REMOVE_TODO", payload:todo
    }
}

const changeStatus = (todo) => {

    return {
        type:"CHANGE_STATUS",
        payload:todo
    }
}


const todoActions = {
    addTodo,
    removeTodo,
    changeStatus
}

export default todoActions
