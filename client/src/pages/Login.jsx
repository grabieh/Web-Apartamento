import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom"
import '../App.css'
import axios from 'axios'
import { useState } from 'react';
import { validateForm } from '../validations/LoginVal';


export const Login = () => {

    const [email, setEmail] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setContrasena(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        
        try {
            const res = await axios.post('http://localhost:1234/user/login', {email, contrasena})
            .then(res => {
                if (res.data === "Success") {    
                    navigate('/')
                } else {
                   alert('Please check email and password are correct') 
                }
            })
        } catch (error) {
            setError('Login failed. Please check your credentials and try again.')
        }

    }

    
    return (
        <div className=' h-screen flex justify-center items-center' style={{backgroundImage: "url('https://img.holidu.com/images/1e077a6a-6313-4e30-8ef6-654494702e4c/l.avif')", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            <div className=' h-full w-full flex justify-center items-center'> 
                <form onSubmit={handleSubmit} className=' flex justify-center items-center w-1/5 rounded-lg shadow-2xl border-slate-300 border-2' style={{backgroundColor: 'rgba(255, 255, 255, 0.945)'}}>
                    <div className=' w-full m-8'>
                        <h1 className='text-5xl font-mono font-bold mb-4'>Login</h1>
                        <div className='flex flex-col justify-evenly h-52'>
                            <TextField type='email' onChange={handleEmailChange} value={email} label="E-mail" variant="outlined" />
                            <TextField type='password' onChange={handlePasswordChange} value={contrasena} label="Password" variant="outlined" />
                        </div>
                        <div className='w-full flex justify-center mt-[-13px] mb-5'>
                            <span>Don't have an account?</span>
                            <Link to={'/signup'} className=' text-red-600 hover:underline'>Register</Link>
                        </div>
                        <button type="submit" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-lg w-full py-2.5  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Login</button>
                    </div>
                </form>
            </div> 
        </div>
    )
}


