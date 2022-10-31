import React,{createContext,useState,useEffect} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login')) || false)
    const data = {login,setLogin}


    useEffect(()=>{
        localStorage.setItem('login',JSON.stringify(login))
    },[login])



  return (
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>

    )
}

export default AuthContextProvider