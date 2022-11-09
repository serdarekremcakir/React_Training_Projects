import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const fetchTodos = createAsyncThunk("fetchTodos",async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
        return Promise.reject();
    }
    const result = await response.json();

    return result;
})


const todos= createSlice({
    name:'todos',
    initialState:{
        todos: {
            data:[],
            error:"",
            loading:false,
        }
    },
    reducers:{
        addTodo: (state, action) => {
            state.todos.data = [
                action.payload,
                ...state.todos.data
            ]
        },
        deleteTodo:(state,action) => {
            state.todos.data = state.todos.data.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state,action) => {
            state.todos.data = state.todos.data.map(todo => {
                if (todo.id === action.payload.id) {
                    todo.title = action.payload.title;
                    todo.completed = action.payload.completed;
                }
                return todo
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state,action) => {
            state.todos.loading = true;
            state.todos.error = "";
            

        });
        builder.addCase(fetchTodos.fulfilled, (state,action) => {
            state.todos.data = action.payload;
            state.todos.loading = false;

        });
        builder.addCase(fetchTodos.rejected, (state,action) => {
            state.todos.loading = false;
            state.todos.error = "Fetching Error"
        })
    }

})



export const {addTodo,deleteTodo,editTodo} = todos.actions;
export default todos.reducer;