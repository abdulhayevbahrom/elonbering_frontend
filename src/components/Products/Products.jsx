import React, { useEffect, useState, memo } from 'react'
import Caption from '../caption/Caption'
import "./Products.css"
import { useTranslation } from 'react-i18next'
import axios from '../../api/index'
import ProductsContainer from '../productsContainer/ProductsContainer'

const Products = () => {
  const { t } = useTranslation()
  const [loader, setLoader] = useState(false)
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    setLoader(true)
    axios.get('products')
      .then(res => { res.data.state && setAllProducts(res.data.innerData) })
      .catch(err => console.log(err))
      .finally(() => setLoader(false))
  }, [])

  return (
    <div className="products">
      <Caption captionName={t("Barchamahsulotlar")} />
      <ProductsContainer allProducts={allProducts} loader={loader} />
    </div>
  )
}

export default memo(Products)