import React from 'react'
import s from "./Header.module.css"
import {AiOutlineSearch} from "react-icons/ai"
import cartImage from "../../assets/subheaderimages/cart.svg"
import heartImage from "../../assets/subheaderimages/heart.svg"
import {useSelector} from "react-redux"
import { headerData } from '../../static/static'
import { Link } from 'react-router-dom'


const Header = () => {
  const cart = useSelector(s => s.addToCart)
  const heart = useSelector(s => s.addToHeart)
  return (
    <div className={s.header}>
     <Link to="/"><h1 className={s.logo}>Elon Bering</h1></Link>
      <div className={s.searchbar}>
        <input type="search" placeholder='Mahsulotni qidirish...' />
        <div className={s.searchbar_search}>
          <AiOutlineSearch/>
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