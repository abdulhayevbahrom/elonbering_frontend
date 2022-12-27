import React from 'react'
import Caption from '../caption/Caption'
import s from "./Products.module.css"
import { Link } from "react-router-dom"
import { products} from '../../static/products'
import {} from "number-brm"
import {FaCartPlus} from 'react-icons/fa'
import {BiHeart} from 'react-icons/bi'
import {AiFillHeart} from 'react-icons/ai'
import { useDispatch, useSelector} from 'react-redux'

const Products = () => {
  const dispatch = useDispatch()
  const heart = useSelector(s=>s.addToHeart).map(i=>i.id)
  console.log(useSelector(s=>s.addToCart));
  function ADD_TO_HEART(item){
    dispatch({type:"ADD_TO_HEART", payload:item})
  }

  function ADD_TO_CART(item){
    item.qty = 1
    dispatch({type:"ADD_TO_CART", payload:item})
  }
  return (
    <div className={s.products}>
      <Caption captionName="Barcha mahsulotlar" />
      <div className={s.products_wrapper}>
        {
          products?.map((item) =>
            <div key={item.id} className={s.products_item}>
              <Link to={`/products/${item.id}`}>
                <img src={item.images[0]} alt={item.title} />
              </Link>
              <p className={s.products_item_title}>{item.title}</p>
              <p className={s.products_item_price}>{item.price.brm("int", 0)} so'm</p>
              <div className={s.products_item_btns}>
                <FaCartPlus onClick={()=>ADD_TO_CART(item)}/>
                {
                  heart.some(i=>i=== item.id) ? <AiFillHeart  onClick={()=>ADD_TO_HEART(item)}/> : <BiHeart onClick={()=>ADD_TO_HEART(item)}/>
                }
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Products