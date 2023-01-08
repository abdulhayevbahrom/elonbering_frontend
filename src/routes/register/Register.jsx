import React from 'react'
import './Register.css'

function Register() {
    // react confetty qowiw kk
  return (
    <div className='register'>
        <h1 className="register_caption">Royxatdan o'tish</h1>
        <form className="register_form">
            <input type="text" minLength={3} required  placeholder='Ism' />
            <input type="text" minLength={3} required placeholder='Familiya' />
            <input type="text" minLength={6} required placeholder='Username' />
            <input type="text" minLength={8} required placeholder='Password' />
            <input type="submit" value="Royxatdan o'tish" />
        </form>
    </div>
  )
}

export default Register
//  /[0-9]/  