import React from 'react'
import { useParams } from 'react-router-dom'

const Vision = () => {
  const params  = useParams();
  console.log("params",params);
  return (
    <div>
      <h2>Vision Page</h2>
      <p>title: {params.title}</p>
      <p>id: {params.id}</p>
    </div>
  )
}

export default Vision

