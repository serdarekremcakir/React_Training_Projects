

const initialState = [
    {id:1, title:"redux template", completed:false},
    {id:2, title:"serdar", completed:true}
]



const todoReducer = (state=initialState,action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {id:Date.now(), title:action.payload, completed:false}]
        
        case "REMOVE_TODO":
            return state.filter(item => item.id !== action.payload.id)

        case "CHANGE_STATUS":
            return state.map(item => item.id === action.payload.id ? {...item, completed:!item.completed}  : item)
    
        default:
            return state;
    }
}

export default todoReducer;