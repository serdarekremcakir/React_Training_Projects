import React, { useState } from 'react'
import { loginHandle } from '../utils'

const Login = ({close}) => {
    const [userId, setUserId] = useState(1)


    const submitHandle = (e) => {
        e.preventDefault();
        loginHandle({username:`user${userId}`, id:Number(userId)})
        close();
    }

  return (

    <>
    
    <form onSubmit={submitHandle}>
        <h3>Login</h3>
        <label htmlFor=""> UserId: 
        <input type="number" max="10" min="1" value={userId} onChange={e => setUserId(e.target.value)}/></label>
        <br />
        <button type="submit">{`Login With UserID: ${userId}`} </button>
    </form>
    <button onClick={close}>Close</button>
    </>

    
  )
}

export default Login