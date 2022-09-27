import React, {useState} from 'react'
import "./Cart.css"
import { useSelector, useDispatch } from 'react-redux'
import ZoomImage from '../../components/zoom-image/ZoomImage'
import { ADD_TO_CART } from '../../context/action/actionTypes'
import Empty from "../../assets/image 2.png"
import {Link} from "react-router-dom"

const Cart = () => {
  const[zoom, setZoom] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector(s => s.addToCart)

  const deleteProducts = (id) =>{
      let filterCart = cart.filter( i => i._id !== id)
      dispatch({type: ADD_TO_CART, payload: filterCart})
  }

  return (
    <div className="cartJs">
      {cart.length ?
      <div className='wrapper'>
        <div className="products">
      { zoom && <ZoomImage urls={zoom} setZoom={setZoom}/> }  
          {
            cart?.map(({_id,url, title,price,desc,}) =>
            <div className="product" key={_id}>
            <a href='#ds' onClick={()=> setZoom(url)}>
            <img src={url[0]} alt={title} />
          </a>
              <p>{title}</p>
              <h4>{price}</h4>
              <h6>{desc}</h6>
              <button className='deleteBtn' onClick={() => deleteProducts(_id)}>Delete</button>
            </div>
            )
          }
        </div>
    </div>
    :
    <div className="empty_cart">
      <h1>Siz hozircha hech narsa xarid qilmagansiz</h1>
      <img src={Empty} alt="" />
      <Link to="/">
      <button className='purchase_btn'>Nimadir sotib olish</button>
      </Link>
    </div>
}
    </div>
  )
}

export default Cart