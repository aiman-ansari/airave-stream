import { useState } from 'react'
import { ToastContainer , toast} from 'react-toastify'
import { useAuth } from '../../Context/AuthContext'
 import 'react-toastify/dist/ReactToastify.css';
 import './Auth.css'
 import { Outlet, useNavigate } from 'react-router-dom'

export const Login = () =>{
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { handleLoginData} = useAuth()
    const [error, setError] = useState(false)
    const [message, setMessage] = useState('')
    const test = {
        email: "adarshbalika@gmail.com",
        password: "adarshBalika123"
    }
    const handleSubmit = () =>{
        if(email && password){
                setError(false)
                toast.success("Successfully Login", {theme: "dark"})
                handleLoginData( email, password)
        }
        else{
            setError(true)
            setMessage('Please fill all the fields')
            }
    }
    const handleTest = () =>{
        setEmail(test.email)
        setPassword(test.password)
    }
    return(
        <div className="auth-container">
            <div class="form">
                <span className='bold-text'>Login</span>
                <div class="input-with-icons ">
                    <i class="bi bi-envelope-fill input-icon"></i>
                    <input type="email" 
                    placeholder="Enter your Email" 
                    class="icon-input"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div class="input-with-icons ">
                    <i class="bi bi-lock-fill input-icon"></i>
                    <input type="email" 
                    placeholder="Enter your Password" 
                    class="icon-input"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <div className='text-danger mb-1'>{error===true ? message : ''}</div>
                <div class="btn-container">
                    <button class="btn btn-primary  width-100" 
                        onClick={() => handleSubmit()
                    }>
                        Login
                    </button>
                    <button class="btn btn-outline-primary" 
                        onClick={() => handleTest()
                    }>
                        Test Login
                    </button>
                    <div class="link-primary" 
                        onClick={() => navigate('/signup')}>
                        New user? Create account
                    </div>
                </div>
            </div>
        <ToastContainer />
        <Outlet />
    </div>
    )
}