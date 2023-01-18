import React from 'react'
import Caption from '../caption/Caption'
import s from "./Products.module.css"
import { Link } from "react-router-dom"
import { products } from '../../static/products'
import { FaCartPlus, FaPhoneAlt} from 'react-icons/fa'
import { BiHeart } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from 'react-i18next'
import {AddToHeart,RemoveFromHeart} from '../../hooks/useHeart'
import { AddToCart } from '../../hooks/useCart'


const Products = () => {
  const {t}  = useTranslation()
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

  return (
    <div className={s.products}>
      <ToastContainer />
      <Caption captionName={t("Barchamahsulotlar")} />
      <div className={s.products_wrapper}>
        {
          products?.map((item) =>
            <div key={item.id} className={s.products_item}>
              <Link to={`/products/${item.id}`}>
                <img src={item.images[0]} alt={item.title} />
              </Link>
              <p className={s.products_item_title}>{item.title}</p>
              <p className={s.products_item_price}>{Math.floor(item.price / 12).brm()} so'm</p>
              <div className={s.products_item_btns}>
                <FaCartPlus onClick={() => ADD_TO_CART(item)} />
                {
                  heart.some(i => i === item.id) ? <AiFillHeart onClick={() => REMOVE_FROM_HEART(item)} /> : <BiHeart onClick={()=>ADD_TO_HEART(item)} />
                }
                <a className={s.products_item_phoneNumber} href={"tel:" + item.phoneNumber}><FaPhoneAlt /></a>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products