
import React from 'react'
import { useRoutes } from "react-router-dom"

import routes from './Routes'

const App = () => {

  return useRoutes(routes)
}

export default App