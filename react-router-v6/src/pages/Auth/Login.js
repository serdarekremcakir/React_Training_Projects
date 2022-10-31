import React,{useContext} from 'react'
import { AuthContext } from '../../AuthContext'
import { useNavigate, useLocation} from 'react-router-dom';
const Login = () => {

   
    const {setLogin,login} = useContext(AuthContext);
    
    const navigate = useNavigate();
    const location = useLocation();

    console.log("login location:",location);
    const loginHandle = () => {
        setLogin({
            name:'serdar',
            id:'1'
        })

        navigate(location?.state?.return_url || "/")
    }

  return (
    <>
        <h2>Login Page</h2>
        <button onClick={loginHandle}>Giris Yap</button>
        <br />
        {JSON.stringify(login)}
        <br />
        
    </>
  )
}

export default Login