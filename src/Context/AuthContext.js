import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContext = createContext()

const AuthProvider = ({children}) =>{
    const navigate = useNavigate()

    const [isLogin, setIsLogin] = useState(false);
    const user =  localStorage.getItem('user')
    const token = localStorage.getItem('token')

    const handleSingupData = async( firstName, lastName,email, password) =>{
        const getValues =  {firstName, lastName,email, password} 
        try {
            const res = await axios.post('/api/auth/signup', getValues);
            if(res.status== 200 || res.status== 201){
                setIsLogin(true)
                localStorage.setItem("token", res.data.encodedToken)
                setTimeout(() => {
                    navigate('/login')
                },3000)
            }
          }
           catch (error) {
            if (error.response.status == 422) {
                toast.error("Account already exist , please login", {theme: "dark"})
            }
            
        }
    }
    const handleLoginData = async(email, password) =>{
        const getLoginValues =  { email, password} 
        try {
                const res = await axios.post('/api/auth/login',getLoginValues);
                        if(res.status== 200 || res.status== 201){
                            setIsLogin(true)
                            localStorage.setItem("token", res.data.encodedToken);
                            localStorage.setItem("user",res.data.foundUser.firstName)
                            setTimeout(() => {
                                navigate('/video')
                            },3000)
                        }
            }
        catch(error){
            if(error.response.status== 404){
                toast.error("Email is not register",{theme: "dark"})
            }
            if(error.response.status== 401){
                toast.error("Password doesn't match",{theme: "dark"})
            }
    }
}


    return(
        <AuthContext.Provider value={{isLogin, setIsLogin, handleSingupData, handleLoginData , user, token}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth =()=> useContext(AuthContext)

export { useAuth, AuthProvider}