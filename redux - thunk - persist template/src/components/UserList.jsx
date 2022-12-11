import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userActions } from '../redux/actions';
const UserList = () => {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector(state => state.userReducer)

  useEffect(() => {
    const getUsers = () => {
      dispatch(userActions.fetchUsers())
    }
    getUsers();
  }, [])

  console.log("users render");

  return (
    <div>
      {error && <h2 style={{ textAlign: "center" }}>{error}</h2>}
      {loading && <h2 style={{ textAlign: "center" }}>Loading</h2>}
      {users &&
        <ul>
          {users.map((item, index) => <li key={index}>{item.id} - {item.name}</li>)}
        </ul>}
    </div>
  )
}

export default UserList