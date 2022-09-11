import React, { useState } from 'react'
import './Login.css'
import loginFormLogo from '../../assets/logonew.jpg'
import { Link } from 'react-router-dom'
import { BsFillEyeSlashFill, BsEye } from 'react-icons/bs'
import { useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [passwordType, setPasswordType] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const LOGIN = (e) => {
        e.preventDefault()
        if(email === "elonbering.uz" && password === '0896'){
            history.push("/admin/create")            
        }
    }
    
    return (
        <div className='login'>
            <form className='loginForm' onSubmit={LOGIN}>
                <div className="loginFormLogo">
                    <img className='loginlogo' src={loginFormLogo} alt="" />
                    <h3 className='loginFormCaption'>Elon bering.uz</h3>
                </div>
                <p className='loginFormDescription'>Enter your email and password below</p>

                <div className="loginFormEmail">
                    <p>EMAIL</p>
                    <input onChange={(e)=> setEmail(e.target.value) } value={email} type="text" placeholder='Email address' />
                </div>
                <div className="loginFormPassword">
                    <div className="loginFormPasswordDescription">
                        <p>PASSWORD</p>
                        <Link to="/">Forgot password?</Link>
                    </div>
                    <div className="loginFormPass">
                        <input onChange={(e)=> setPassword(e.target.value) } value={password} type={passwordType ? "password" : "text"} placeholder='Password' /> {passwordType ? <BsEye onClick={() => setPasswordType(!passwordType)} /> : <BsFillEyeSlashFill onClick={() => setPasswordType(!passwordType)} />}
                    </div>
                </div>
                <button className='logInBtn' type='submit'>Log In</button>
                <p className='loginForm_signUp'>Don’t have an account? <Link to="/">Sign Up</Link></p>
            </form>
        </div>
    )
}

export default Login