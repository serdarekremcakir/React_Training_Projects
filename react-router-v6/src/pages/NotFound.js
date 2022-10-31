import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <h2>404 Page Not Found</h2>
            <Link to="/" >Return to homepage</Link>
        </>
    )
}

export default NotFound