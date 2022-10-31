import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { Navigate,useLocation } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const { login } = useContext(AuthContext);
    const location = useLocation();

    console.log("privateroute location",location);
    return (
        <>
            {login ?
                <>
                    {children}
                </>
                : <Navigate to="/auth/login" state={
                    {return_url:location.pathname}
                } replace={true}/>}
        </>
    )
}

export default PrivateRoute