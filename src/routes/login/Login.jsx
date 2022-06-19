import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
    const [userName , setName ]= useState('')
    const [password , setPassword ]= useState('')

    function login (e){
        e.preventDefault()
        axios.post("http://localhost:7000/created/login",{
            password:password,
            userName:userName
         })
         .then(res => console.log(res.data))
         .catch(err => console.log(err))
    }
    return (
    <div className='login'>
        <form onSubmit={login}>
            <input type="text" placeholder='name' value={userName} onChange={e => setName(e.target.value)} />
            <input type="text" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} />
            <button type='submit'>Log in</button>
            <a href="tel:+998939119572">fewrgt</a>
            <Link to="/register">create account</Link>
        </form>
    </div>
  )
}

export default Login