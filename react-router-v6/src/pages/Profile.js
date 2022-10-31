import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Link, useNavigate, } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const { login, setLogin } = useContext(AuthContext);
  return (
    <>
      <h2>Profile Page</h2>
      <h3>Welcome {login.name}</h3>

      <button onClick={() => {
        navigate("/")
        setLogin(false)
      }}>Log out</button>

      <br />
      <Link to="/">Go to home page</Link>
    </>
  )
}

export default Profile