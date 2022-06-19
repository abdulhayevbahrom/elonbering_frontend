import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Register.css'

function Register() {
    const [ userName , setUserName]= useState('')
    const [ surName , setSurName]= useState('')
    const [ password , setPassword]= useState('')
    const [ phoneNumber , setPhoneNumber]= useState('')
    useEffect(()=>{
        
    },[])

    function SIGNUP (e){
        if(userName === '' || surName === "" || password==="" || phoneNumber === ""){
            return alert("Belgilangan joylarni to'ldiring!!!")
        }
        e.preventDefault()
        axios.post("http://localhost:7000/created/product",{
            userName:userName,
            surName:surName,
            password:password, 
            phoneNumber:phoneNumber
         })
         .then(res => console.log(res.data))
         .catch(err => console.log(err))
         setUserName("")
         setSurName("")
         setPassword("")
         setPhoneNumber("")
    }

    return (
        <div className='register'>
            <form onSubmit={SIGNUP}>
                <input type="text" value={userName} onChange={e => setUserName(e.target.value)} placeholder='name' />
                <input type="text" value={surName} onChange={e => setSurName(e.target.value)} placeholder='surname' />
                <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder='password' />
                <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} placeholder='phone' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Register