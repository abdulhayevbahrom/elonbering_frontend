import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Register.css'
import RegisterLogo from '../../assets/logonew.jpg'

function Register() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [login, setLogin]  = useState(false)
    useEffect(() => {

    }, [])

    function SIGNUP(e) {
        if (userName === '' || password === "" || phoneNumber === "") {
            return alert("Belgilangan joylarni to'ldiring!!!")
        }
        e.preventDefault()
        axios.post("http://localhost:7000/created/product", {
            userName: userName,
            password: password,
            phoneNumber: phoneNumber
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        setUserName("")
        setPassword("")
        setPhoneNumber("")
    }

    document.title="Royxatdan o'tish"
    return (
        <div className='register'>
            <form onSubmit={SIGNUP}>
                <div className="register_bar">
                    <h3 onClick={() => setLogin(!login)} style={!login ? {background:"transparent"} : {background:"orangered"}}>Kirish</h3>                  
                    <h3 onClick={() => setLogin(!login)} style={login ? {background:"transparent"} : {background:"orangered"}} >Royxatdan o'tish</h3>                  
                </div>
    
                <div className="registerLogo">
                    <img src={RegisterLogo} alt="logo" />
                    <h3>elonbering.uz</h3>
                </div>
                {
                    login ? 
                    <div className="loginValues registerValues">
                        <h2>Kirish</h2>
                        <input type="text" placeholder='Ismingiz' />
                        <input type="text" placeholder='Parolingiz' />
                        <input type="submit" value="Kirish"/>
                    </div>
                    :
                <div className='registerValues'>
                    <h2>Royxatdan o'tish</h2>
                    <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder='Ismingiz' />
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder='Parolingiz' />
                    <input type="number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder='+998942029122' />
                    <input type='submit' value={userName === '' || password === "" || phoneNumber === "" ? "Ma'lumotlarni to'ldiring" : "Royxatdan o'tish"} style={userName === '' || password === "" || phoneNumber === "" ? {background:"#f00", cursor:"no-drop"} : {background:"#01dd01", cursor:"pointer"}}/>
                </div>
                }
            </form>
        </div>
    )
}

export default Register