import React from 'react'
import s from "./Navbar.module.css"
import SubHeader from "../SubHeader/SubHader"
import Header from "../Header/Header"
import { useLocation } from 'react-router-dom'
import { ImPhone } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux'
import { SIDEBAR_SHOW } from '../../context/action/actionTypes'

const Navbar = () => {
  const dispatch = useDispatch()
  const sideState = useSelector(s => s.sidebarShow)
  const location = useLocation()
  if (location.pathname === "/admin/createProduct") {
    return <></>
  }

  const sidebarClose = ()=>{
    dispatch({type:SIDEBAR_SHOW, payload:true})
  }
  return (
    <div className={s.navbar}>
      <div onClick={sidebarClose} style={!sideState ? {display:"block"} : {display:"none"}} className={s.sidebar}>
        <div className={s.sub_buttons}>
          <button onClick={sidebarClose}>20% Chegirmalar</button>
          <button onClick={sidebarClose}>10% Muddatli To'lov</button>
        </div>
        <ul className={s.sub_collection}>
          <li  onClick={sidebarClose}>Bizga qo'shiling</li>
          <li  onClick={sidebarClose}>Yordam</li>
          <li  onClick={sidebarClose}>Sayt haritasi</li>
          <a href='tel:+998942029122'  onClick={sidebarClose}> <ImPhone /> <span>+998(94)202 91 22</span> </a>
        </ul>
      </div>
      <SubHeader />
      <Header />
    </div>
  )
}

export default Navbar