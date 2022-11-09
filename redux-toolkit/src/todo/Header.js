import React from 'react'
import {useDispatch} from 'react-redux'
import { setUser } from '../stores/auth'
import {useSelector} from 'react-redux'
import { loginHandle as loginHandleUtils } from '../utils'
import { logoutHandle as logoutHandleUtils } from '../utils'
import { openModal } from '../stores/modal'

const Header = () => {

  const dispatch = useDispatch()
  const {user} = useSelector(state => state.auth)

  const loginHandle = (user) => {
    // dispatch(setUser(user))
    loginHandleUtils(user)
  }

  const logoutHandle = () => {
    // dispatch(setUser(false))
    logoutHandleUtils()
  }

  const login = () => {
    dispatch(openModal({name:'login'}))
  }



  return (
    <header style={{display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 40px'}}>
      <h2>SEC</h2>
      {!user && (
        <nav>
          <button onClick={() => loginHandle({id: 'admin', username: 'serdarcakir'})}>Serdar(Admin) Log In</button>
          <button onClick={login}>Login with userID</button>
        </nav>
      )}
      {user && (
        <nav style={{textAlign:'center'}}>
          <p>Hosgeldin, {user.username} | <small>userID {user.id}</small></p>
          <button onClick={logoutHandle}>Log Out</button>
        </nav>
      )}
    </header>
  )
}

export default Header