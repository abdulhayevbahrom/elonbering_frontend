import React, { useState } from 'react'
import './SinglePage.css'
import s from '../../components/Products/Products.module.css'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { products } from '../../static/products'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/footer/Footer'
import Caption from '../../components/caption/Caption'
import { FaCartPlus, FaPhoneAlt } from 'react-icons/fa'
import { BiHeart } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Capitalize from '../../hooks/capitalize'
import {AddToHeart,RemoveFromHeart} from '../../hooks/useHeart'
import { AddToCart } from '../../hooks/useCart'
import ZoomImage from '../../components/zoom-image/ZoomImage'

function SinglePage() {
  const [zoom, setZoom] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector(s => s.addToCart)
  const [index, setIndex] = useState(0)
  const { id } = useParams()
  const product = products.find(i => i.id === +id)

  const heart = useSelector(s => s.addToHeart).map(i => i.id)   // for heart custom

  const ADD_TO_HEART = (item) => {
    return AddToHeart(item, dispatch, toast)
  }

  function REMOVE_FROM_HEART(item) {
    return RemoveFromHeart(item, dispatch, toast)
  }

  function ADD_TO_CART(item) {
   return AddToCart(item, cart, dispatch, toast)
  }

  document.title = Capitalize(product.title)
  return (
    <div className='singleWrapper'>
      <ToastContainer />
      <Header />
      <Caption captionName={Capitalize(product.title)} />
      <div className="single_container">
        <div className="single_container_img">
          <img src={product.images[index]} className="single_container_img_single" alt={product.title} onClick={()=>setZoom(true)} />
           {zoom && <ZoomImage images={product.images} setZoom={setZoom}/>}
          <div className="allImg">
            {
              product.images?.map((i, index) => <img key={index} onClick={() => setIndex(index)} src={i} alt="" />)
            }
          </div>
        </div>
        <div className="single_container_info">
          <h1>{Capitalize(product.title)}</h1>
          <p>Narxi: {product.price.brm()} so'm</p>
          {product.yurgan ?
            <p>Probeg: {product.yurgan} km</p>
            : <></>}
          <p>Location: {Capitalize(product.location)}</p>
          <p>Tel: <a href={"tel:" + product.phoneNumber}>{product.phoneNumber}</a> </p>
          <p>Rangi: {Capitalize(product.rangi)}</p>

          <div className={s.products_item_btns+ ' products_item_btns'}>
            <FaCartPlus onClick={() => ADD_TO_CART(product)} />
            {
              heart.some(i => i === product.id) ? <AiFillHeart onClick={() => REMOVE_FROM_HEART(product)} /> : <BiHeart onClick={() => ADD_TO_HEART(product)} />
            }
            <a className={s.products_product_phoneNumber} href={"tel:" + product.phoneNumber}><FaPhoneAlt /></a>
          </div>
        </div>
      </div>
      <div className="single_more">
        <h2 className="single_more_caption">Batafsil</h2>
        <div className="moreInfo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae laudantium est molestiae tenetur similique, voluptate dolorum sint? Optio reiciendis inventore eveniet tempora eligendi? Totam rem, porro iure, veniam voluptatibus expedita obcaecati quos nisi voluptatum nesciunt explicabo nemo ab placeat nobis harum tempora ea ducimus, veritatis commodi amet eius? Inventore a nemo fugiat alias facilis soluta tenetur recusandae iste ab mollitia delectus, officia ea, dolorem ad? Officiis ullam error ut, expedita ea rerum quos impedit quo veniam cum maiores sapiente unde et accusantium provident, vitae in similique officia vel fugit quod magni dignissimos corporis. Quisquam nihil quis id ipsam qui?
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default SinglePage