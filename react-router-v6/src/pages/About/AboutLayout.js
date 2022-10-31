import React from 'react'
import { Outlet } from 'react-router-dom'

const AboutLayout = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center', backgroundColor: 'turquoise' }}>AboutLayout Permanent</h2>

      <Outlet />
    </div>
  )
}

export default AboutLayout


