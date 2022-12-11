

const initialState = {
    loading: false,
    users: [],
    error: false
}


const userReducer = (state=initialState,action) => {
    switch (action.type) {
        case "GET_REQUEST":
            return {...state,
                 loading:true,
                users:[],
                error:false
                }
        case "GET_USERS":
            return {...state, 
                users:action.payload, 
                loading:false,
                error: false
            }
            
        case "GET_ERROR":
            return {...state, 
            error:action.payload, 
            loading:false,
            users:[]
            
            }
    
        default:
            return state
    }
}


export default userReducer