import React from 'react'
import s from "./Navbar.module.css"
import SubHeader from "../SubHeader/SubHader"
import Header from "../Header/Header"
import { useLocation } from 'react-router-dom' 

const Navbar = () => {
  const location = useLocation()
  if(location.pathname === "/admin/createProduct"){
    return <></>
  }
  return (
    <div className={s.navbar}>
      <SubHeader/>
      <Header/>
    </div>
  )
}

export default Navbar