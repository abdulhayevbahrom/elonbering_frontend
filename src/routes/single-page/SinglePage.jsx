import React,{useState,useEffect} from 'react'
import axios from "../../api/axios"
import "./SinglePage.css"
import {useDispatch, useSelector} from "react-redux"
import {ADD_TO_CART} from "../../context/action/actionTypes"
import ZoomImage from '../../components/zoom-image/ZoomImage'

const SinglePage = ({
    match: {
        params: {id}
    }
}) => {
    const [zoom, setZoom] = useState(null)
    const dispatch = useDispatch()
    const cart = useSelector(s => s.addToCart)
    const [data, setData] = useState([])
    const [ imgInx, setImgInx] = useState(0)
    const [ _id_singlePro,set_id_singlePro] = useState(0)

    useEffect(() =>{
        axios.get(`/products/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [id])

    const addToCartProducts= (product) =>{
        dispatch({type: ADD_TO_CART, payload:[...cart, product]})
    }

  return (
    <div className='singleWrapper'>
         { zoom && <ZoomImage urls={zoom} setZoom={setZoom}/> }  
        {
            data.data?.map(({_id, title, price, url, desc, kredit}) =>
            
            <div key={_id} className="product3">
             
                <div className="all_img">
                  
                   {
                        url.map((item,inx)=> <div  key={inx}> <img onClick={()=> (set_id_singlePro(_id), setImgInx(inx))} src={item} alt="" height={55}  /> </div>)
                   }
                  
                </div>
                <div className="main_img">
                    {
                        _id_singlePro ===_id? <li onClick={()=> setZoom(url)}><img src={url[imgInx]} alt="" /></li>
                        :
                        <li onClick={()=> setZoom(url[imgInx])}>
                        <img src={url[0]} alt={title} />
                        </li>
                    }
                   
                </div>
              <div className="productinfo">
              <p>{title}</p>
                <h4>{price}</h4>
                <span>{kredit}</span>
                <h6>{desc}</h6>
                <button onClick={() => addToCartProducts({_id, title, price, url, desc, kredit})} className='addToCartBtn'>Sotib Olish</button>
              </div>
         </div>
            )
        }
    </div>
  )
}

export default SinglePage