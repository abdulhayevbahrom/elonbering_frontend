import React, { useEffect, useState, memo } from 'react'
import './SinglePage.css'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/footer/Footer'
import Caption from '../../components/caption/Caption'
import { FaCartPlus, FaPhoneAlt } from 'react-icons/fa'
import { BiHeart } from 'react-icons/bi'
import { AiFillHeart } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Capitalize from '../../hooks/capitalize'
import { AddToHeart, RemoveFromHeart } from '../../hooks/useHeart'
import { AddToCart } from '../../hooks/useCart'
import ZoomImage from '../../components/zoom-image/ZoomImage'
import axios from '../../api/index'
import Loader from '../../components/loader/Loader'
import { FiEye } from 'react-icons/fi'
import Capitalize from '../../hooks/capitalize'
import { BsFillShareFill } from 'react-icons/bs'

function SinglePage() {
  const [zoom, setZoom] = useState(false)
  const dispatch = useDispatch()
  const cart = useSelector(s => s.addToCart)
  const [index, setIndex] = useState(0)
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    axios.get(`/products/single/${id}`)
      .then(res => {
        if (res.data.state) {
          setProduct(res.data.innerData)
        }
      })
      .catch(err => console.log(err))
    axios.patch(`/products/view/${id}`)
  }, [id])

  const heart = useSelector(s => s.addToHeart).map(i => i._id)   // for heart custom

  function ADD_TO_HEART(item) { AddToHeart(item, dispatch, toast) }
  function REMOVE_FROM_HEART(item) { RemoveFromHeart(item, dispatch, toast) }
  function ADD_TO_CART(item) { AddToCart(item, cart, dispatch, toast) }

  function share(i) {
    window.navigator.share({
      text: `${i.title}`,
      url: `https://www.elonbering.uz/products/${i._id}`
    })
  }

  document.title = product?.title
  return (
    <div className='singleWrapper'>
      <ToastContainer />
      <Header />
      <Caption captionName={product?.title} />
      {
        product ? <>
          <div className="single_container">
            <div className="single_container_img">
              <img src={product?.images[index]} className="single_container_img_single" alt={product?.title} onClick={() => setZoom(true)} />
              {zoom && <ZoomImage images={product?.images} setZoom={setZoom} />}
              <div className="allImg">
                {
                  product?.images?.map((i, index) => <img key={index} onClick={() => setIndex(index)} src={i} alt="" />)
                }
              </div>
            </div>
            <div className="single_container_info">
              <h1>{product?.title}</h1>
              <p>Narxi: {product?.price.brm()} so'm</p>
              {product?.category === "avtomobiles" &&
                <p>Probeg: {product?.probeg} km</p>
              }
              <p>Location: {product?.location}</p>
              <p>Tel: <a href={"tel:" + product?.phoneNumber}>{product?.phoneNumber}</a> </p>
              <p>Rangi: {product?.color}</p>
              <p><FiEye /> {product.views}</p>
              <div className="productsContainer_item_btns">
                <FaCartPlus onClick={() => ADD_TO_CART(product)} />
                {
                  heart.some(i => i === product._id) ? <AiFillHeart onClick={() => REMOVE_FROM_HEART(product)} /> : <BiHeart onClick={() => ADD_TO_HEART(product)} />
                }
                <a className="products_product_phoneNumber" href={"tel:" + product.phoneNumber}><FaPhoneAlt /></a>
                <BsFillShareFill onClick={() => share(product)} />
              </div>
            </div>
          </div>
          <div className="single_more">
            <h2 className="single_more_caption">Batafsil</h2>
            <div className="moreInfo">{product.desc}</div>
          </div></>
          :
          <Loader />
      }
      <Footer />
    </div>
  )
}

export default memo(SinglePage)