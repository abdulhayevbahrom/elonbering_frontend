import React, { useState } from "react";
import "./Login.css";
import {FaUserTie} from 'react-icons/fa';
import {RiLockFill} from 'react-icons/ri';
import logo from '../../assets/logo (2).png'
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <fieldset>
        <div className="loginLogo">
          <img src={logo} alt="logo" />
        </div>
      <form>
        <div className="loginEmail"> 
          <FaUserTie/>
          <input type="text"  minLength={6} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="loginEmail">
          <RiLockFill/>
          <input type="password" minLength={8}  placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
        <Link className="" to='/register'>Ro'yxatdan o'tish</Link>
      </form>
      </fieldset>
    </div>
  );
}

export default Login;