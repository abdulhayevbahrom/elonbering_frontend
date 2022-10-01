import React from 'react'
import s from "./Header.module.css"
import { GoSearch } from "react-icons/go"
import cartImage from "../../assets/subheaderimages/cart.svg"
import heartImage from "../../assets/subheaderimages/heart.svg"
import { useDispatch, useSelector } from "react-redux"
import { headerData } from '../../static/static'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { SIDEBAR_SHOW } from '../../context/action/actionTypes'


const Header = () => {
  const dispatch = useDispatch()
  const cart = useSelector(s => s.addToCart)
  const heart = useSelector(s => s.addToHeart)

  const sidebarShow = () => {
    dispatch({ type: SIDEBAR_SHOW, payload: false })
  }
  return (
    <div className={s.header}>
      <FaBars className={s.header_bars_icon} onClick={sidebarShow} />
      <Link to="/"><h1 className={s.logo}>{window.innerWidth > 656 ? "Elon Bering.uz" : "EB"}</h1></Link>
      <div className={s.searchbar}>
        <input autoFocus type="search" placeholder={window.innerWidth > 390 ? "Mahsulotni qidirish..." : "Qidirish..."} />
        <div className={s.searchbar_search}>
          <GoSearch />
        </div>
      </div>
      <div className={s.header_box_wrapper}>
        {
          headerData?.map((i, inx) =>
            <div key={inx} className={s.box}>
              <Link to={`/${i.link}`}><img src={i.img} alt="" />
              </Link>
              <p>{i.title}</p>
            </div>
          )
        }
        <Link to="/heart">
          <div className={s.box}>
            <span>{heart && heart.length}</span>
            <img src={heartImage} alt="" />
            <p>Sevimlilar</p>
          </div>
        </Link>
        <Link to="/cart">
          <div className={s.box}>
            <span>{cart && cart.length}</span>
            <img src={cartImage} alt="" />
            <p>Savatcha</p>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Header