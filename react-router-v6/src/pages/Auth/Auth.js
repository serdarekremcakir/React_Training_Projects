import React from 'react'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <>
    <h2>Auth Page</h2>
    <Outlet />
    </>
  )
}

export default Auth