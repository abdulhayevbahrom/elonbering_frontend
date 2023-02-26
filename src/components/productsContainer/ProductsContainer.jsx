import React from 'react'
import Loader from '../loader/Loader'
import { Link } from "react-router-dom"
import { FaCartPlus, FaPhoneAlt } from 'react-icons/fa'
import { BiHeart } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { AddToHeart, RemoveFromHeart } from '../../hooks/useHeart'
import { AddToCart } from '../../hooks/useCart'
import Capitalize from '../../hooks/capitalize'
import { FiEye } from 'react-icons/fi'
import './ProductsContainer.css'
import empty_cart from '../../assets/empty-cart_blue.png'
import { BsFillShareFill } from 'react-icons/bs'

function ProductsContainer({ loader, allProducts }) {
  const dispatch = useDispatch()
  const heart = useSelector(s => s.addToHeart).map(i => i._id)   // for heart custom
  const cart = useSelector(s => s.addToCart);

  function ADD_TO_HEART(item) { AddToHeart(item, dispatch, toast) }
  function REMOVE_FROM_HEART(item) { RemoveFromHeart(item, dispatch, toast) }
  function ADD_TO_CART(item) { AddToCart(item, cart, dispatch, toast) }

  function share(i) {
    window.navigator.share({
      text: `${i.title}`,
      url: `https://www.elonbering.uz/products/${i._id}`
    })
  }

  console.log(allProducts);
  return (
    <div className={!allProducts.length ? "productsContainer_empty" : "productsContainer"}>
      {loader && <Loader />}
      {
        !allProducts.length ?
          <div className='empty_productsContainer'>
            {!loader &&
              <>
                <img src={empty_cart} alt="" />
                <h1>Kechirasiz,<br /> hozirda hechqanday mahsulot mavjud emas.</h1>
              </>
            }
          </div>
          :
          <>
            {
              allProducts?.map((item, index) =>
                <div key={index} className='productsContainer_item'>
                  <Link to={`/products/${item._id}`} style={{ backgroundImage: `url(${item.images[0]})`, backgroundPosition: "center" }} className="productsContainer_item_img">
                    <img src={item.images[0]} alt={item.title} />
                  </Link>
                  <p>{Capitalize(item.title)}</p>
                  <h4>{item.price.brm()} so'm</h4>
                  <div className="productsContainer_item_btns">
                    <FaCartPlus onClick={() => ADD_TO_CART(item)} />
                    {
                      heart.some(i => i === item._id) ? <AiFillHeart onClick={() => REMOVE_FROM_HEART(item)} /> : <BiHeart onClick={() => ADD_TO_HEART(item)} />
                    }
                    <a className="productsContainer_item_tel" href={"tel:" + item.phoneNumber}><FaPhoneAlt /></a>
                    <BsFillShareFill onClick={() => share(item)} />
                  </div>
                  <div className="productsContainer_item_date">
                    <p><FiEye />{item.views}</p>
                    <p>{item.date?.slice(4, 15)}</p>
                  </div>
                </div>
              )
            }
          </>
      }
    </div>
  )
}

export default ProductsContainer
