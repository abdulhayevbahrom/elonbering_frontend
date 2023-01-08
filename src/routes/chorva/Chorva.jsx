import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation} from 'react-router-dom'
import { toast } from 'react-toastify'
import Caption from '../../components/caption/Caption'
import Header from '../../components/Header/Header'
import Capitalize from '../../hooks/capitalize'
import Categories from '../../components/categories/Categories'
import { products } from '../../static/products'
import s from "../../components/Products/Products.module.css"
import { FaCartPlus, FaPhoneAlt} from 'react-icons/fa'
import { BiHeart } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/footer/Footer'
import {AddToHeart,RemoveFromHeart} from '../../hooks/useHeart'
import { AddToCart } from '../../hooks/useCart'


function Chorva() {
  const {pathname} = useLocation()
  const {t} = useTranslation() 
  const dispatch = useDispatch()
  const heart = useSelector(s => s.addToHeart).map(i => i.id)   // for heart custom
  const cart = useSelector(s => s.addToCart);

  const ADD_TO_HEART = (item) => {
    return AddToHeart(item, dispatch, toast)
  }

  function REMOVE_FROM_HEART(item) {
    return RemoveFromHeart(item, dispatch, toast)
  }

  function ADD_TO_CART(item) {
   return AddToCart(item, cart, dispatch, toast)
  }


  const data= products.filter(i=>i.category===pathname.slice(1))
  return (
    <div className='chorva'>
      <div className="home_navbar">
        <Header/>
        <Categories/>
      </div>
      <Caption captionName={Capitalize(t("MaishiyTexnika"))}/>
      <div className={s.products_wrapper}>
        {
          data?.map((item) =>
            <div key={item.id} className={s.products_item}>
              <Link to={`${pathname}/${item.id}`}>
                <img src={item.images[0]} alt={item.title} />
              </Link>
              <p className={s.products_item_title}>{item.title}</p>
              <p className={s.products_item_price}>{item.price.brm("int", 0)} so'm</p>
              <div className={s.products_item_btns}>
                <FaCartPlus onClick={() => ADD_TO_CART(item)} />
                {
                  heart.some(i => i === item.id) ? <AiFillHeart onClick={() => REMOVE_FROM_HEART(item)} /> : <BiHeart onClick={() => ADD_TO_HEART(item)} />
                }
                <a className={s.products_item_phoneNumber} href={"tel:" + item.phoneNumber}><FaPhoneAlt /></a>
              </div>
            </div>
          )
        }
      </div>
      <Footer/>
    </div>
  )
}

export default Chorva
