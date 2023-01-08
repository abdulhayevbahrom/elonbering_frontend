import React, { useState} from 'react';
import './Cart.css';
import Header from '../../components/Header/Header'
import Caption from '../../components/caption/Caption'
import Footer from '../../components/footer/Footer'
import Capitalize from '../../hooks/capitalize';
import empty_cart from '../../assets/empty-cart.png'
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa'
import { BiHeart } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AddToHeart,RemoveFromHeart} from '../../hooks/useHeart'
import { AddToCart, MinusFromCart } from '../../hooks/useCart'

function Cart() {
  const dispatch = useDispatch()
  const [state, setState] = useState(false)
  const cart = useSelector(s => s.addToCart)
  const heart = useSelector(s => s.addToHeart).map(i => i.id)   // for heart custom
  const totalSum = cart.map(i => i.price * i.qty).reduce((a, b) => a + b, 0)
  const totalQty = cart.map(i => i.qty + 0).reduce((a, b) => a + b, 0)

  const ADD_TO_HEART = (item) => {
    return AddToHeart(item, dispatch, toast)
  }

  function REMOVE_FROM_HEART(item) {
    return RemoveFromHeart(item, dispatch, toast)
  }

  function ADD_TO_CART(item) {
   return AddToCart(item, cart, dispatch, toast)
  }
  
  function MINUS_FROM_CART(item) {
    return MinusFromCart(item, cart, dispatch)
  }

  function CLEARE_CART() {
    setState(false)
    dispatch({ type: "CLEARE_CART", payload: [] })
  }


  function DELETE_ITEM_FROM_CART(id){
    if(window.confirm("Ushbu mahsulotni o'chirmoqchimisiz?")){
      dispatch({ type: "REMOVE_FROM_CART", payload: id })
      toast.success("o'chirildi", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500
      })
    }
  }

  return (
    <div className='cart'>
      <ToastContainer />
      <Header />
      <Caption captionName={"Savat (" + cart.length + ")"} />
      {
        cart.length ?
          <div className="cart_wrapper">
            <div className="cart_products">
              {
                cart?.map((item, index) =>
                  <div key={index} className="cart_wrapper_item">
                    <Link to={`/products/${item.id}`}>
                      <img src={item.images[0]} alt="foto" />
                    </Link>
                    <div className="cart_wrapper_item_title">
                      <p>{Capitalize(item.title)}</p>
                      <p><span>Manzil:</span>{Capitalize(item.location)}</p>
                      <p><span>Tel:</span><a href={"tel:" + item.phoneNumber}>{item.phoneNumber}</a></p>
                    </div>
                    <div className="cart_wrapper_item_qty">
                      <button disabled={item.qty <= 1}><FaMinus onClick={() => MINUS_FROM_CART(item)} /></button>
                      <h2>{item.qty}</h2>
                      <button><FaPlus onClick={() => ADD_TO_CART(item)} /></button>
                    </div>
                    <h3>{(item.qty * item.price).brm()}</h3>
                    <div className='cart_wrapper_item_bnts'>
                      {
                        heart.some(i => i === item.id) ? <AiFillHeart onClick={() => REMOVE_FROM_HEART(item)} /> : <BiHeart onClick={() => ADD_TO_HEART(item)} />
                      }
                      <FaTrash className='cart_item_trash' onClick={() => DELETE_ITEM_FROM_CART(item.id)} />
                    </div>
                  </div>
                )
              }
            </div>
            <div className="cart_total_info">
              <h3>Umumiy ma'lumot</h3>
              <p><span>Barcha mahsulotlar soni:</span> {totalQty} ta</p>
              <p><span>Umumiy narx:</span>{totalSum.brm()} so'm</p>

              <button className='cleareCart' onClick={() => setState(true)}>Savatni bo'shatish</button>
            </div>
          </div>
          :
          <div className="empty_cart_wrapper">
            <img src={empty_cart} alt="" />
            <Link to="/">Mahsulot sotib olish</Link>
          </div>
      }
      <Footer />

      <div className="cart_wrapper_dell" style={{ display: !state ? "none" : "block" }}>
        <div className={state ? "delete_notification" : "delete_no"}>
          <p>Savatni bo'shatmoqchimisiz?</p>
          <div className="delete_notification_btns">
            <button onClick={CLEARE_CART}>Ha</button>
            <button onClick={() => setState(false)}>Yo'q</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
