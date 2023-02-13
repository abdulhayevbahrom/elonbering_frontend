import React, { useEffect, useState } from 'react'
import './AllProducts.css'
import Caption from '../caption/Caption'
import ProductsContainer from '../productsContainer/ProductsContainer'
import axios from '../../api/index'
function AllProducts() {
  const [loader, setLoader] = useState(false)
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    setLoader(true)
    axios.get('/products')
      .then(res => {
        if (res.data.state) {
          setAllProducts(res.data.innerData)
        }
      })
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  }, [])
  return (
    <div className='allproducts'>
      <Caption captionName="All proucts" />
      <ProductsContainer allProducts={allProducts} loader={loader} />
    </div>
  )
}

export default AllProducts