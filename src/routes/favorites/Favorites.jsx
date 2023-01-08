import React from 'react'
import './Favorites.css'
import Header from '../../components/Header/Header'
import Caption from '../../components/caption/Caption'
import Capitalize from '../../hooks/capitalize'
import { useTranslation } from 'react-i18next'
import { Link} from 'react-router-dom'
import s from "../../components/Products/Products.module.css"
import { FaCartPlus, FaPhoneAlt} from 'react-icons/fa'
import { BiHeart } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import {AddToHeart,RemoveFromHeart} from '../../hooks/useHeart'
import { AddToCart } from '../../hooks/useCart'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Footer from '../../components/footer/Footer'


function Favorites() {
  const dispatch = useDispatch()
  const {t}= useTranslation()
  const heart = useSelector(s=>s.addToHeart)
  const heart_id = useSelector(s => s.addToHeart).map(i => i.id)   // for heart custom
  const cart = useSelector(s=>s.addToCart)
  
  const ADD_TO_HEART = (item) => {
    return AddToHeart(item, dispatch, toast)
  }

  function REMOVE_FROM_HEART(item) {
    return RemoveFromHeart(item, dispatch, toast)
  }

  function ADD_TO_CART(item) {
   return AddToCart(item, cart, dispatch, toast)
  }
  
  return (
    <div className='sevimlilar'>
      <Header/>
      <Caption captionName={Capitalize(t("sevimlilar"))}/>
      <div className="sevimlilar_wrapp">
        {heart.length ? heart.map(item=>
          <div key={item.id} className={s.products_item}>
          <Link to={`products/${item.id}`}>
            <img src={item.images[0]} alt={item.title} />
          </Link>
          <p className={s.products_item_title}>{Capitalize(item.title)}</p>
          <p className={s.products_item_price}>{item.price.brm("int", 0)} so'm</p>
          <div className={s.products_item_btns}>
            <FaCartPlus onClick={() => ADD_TO_CART(item)} />
            {
              heart_id.some(i => i === item.id) ? <AiFillHeart onClick={() => REMOVE_FROM_HEART(item)} /> : <BiHeart onClick={() => ADD_TO_HEART(item)} />
            }
            <a className={s.products_item_phoneNumber} href={"tel:" + item.phoneNumber}><FaPhoneAlt /></a>
          </div>
        </div>
          )
          :
          <pre>
            <h1>Kechirasiz,</h1>
            <h1>Hozircha sevimli mahsulotlar yo'q</h1>

            <Link to='/'>Bosh sahifa</Link>
          </pre>
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Favorites
