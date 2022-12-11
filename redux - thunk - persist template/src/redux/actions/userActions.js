



const fetchUsers =  () => {
    return async function (dispatch) {
        dispatch({
            type:"GET_REQUEST"
        })
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await response.json();

            dispatch({
                type:"GET_USERS",
                payload: result
            })

        } catch (error) {
            dispatch({
                type:"GET_ERROR",
                payload: error.message
            })
        }
    }
}


const userActions = {
    fetchUsers
}

export default userActions