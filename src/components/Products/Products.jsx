import React,{useState, useEffect} from 'react'
import axios from "../../api/axios"
import s from "./Products.module.css"
import {Link} from "react-router-dom"

const Products = () => {
  const [data, setData] = useState([])
  
  useEffect(() =>{
    axios.get("/products")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  },[data])


  return (
    <div className={s.products}>
        {
          data.data?.slice(0, 40).map(({_id, url,title, price, desc})=> 
          <div key={_id} className={s.product}>
             <Link to={`/products/${_id}`}>
                <img src={url[0]} alt="" />
             </Link>
              <h3>{title}</h3>
              <h2>{price}</h2>
              <p>{desc}</p>
          </div>
          )
        }
    </div>
  )
} 

export default Products