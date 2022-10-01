import React, { useState, useEffect } from 'react'
import axios from "../../api/axios"
import s from "./Products.module.css"
import { Link } from "react-router-dom"
import { productData } from '../../static/ProductDate'

const Products = () => {
  const [data, setData] = useState(productData)

  useEffect(() => {
    axios.get("/products")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [data])


  return (
    <div className={s.products}>
      {
        data?.slice(0, 40).map(({ _id, url, title, price, desc }) =>
          <div key={_id} className={s.product}>
            <Link to={`/products/${_id}`}>
              <img src={url[0]} alt={title} />
            </Link>
            <p>{title}</p>
            <h1>{price}</h1>
          </div>
        )
      }
    </div>
  )
}

export default Products