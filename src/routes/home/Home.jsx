import React from 'react'
import './Home.css'
import BannerCarousel from '../../components/bannerCarousel/BannerCarousel'
import Products from '../../components/Products/Products'
import Category from "../../components/category/Category"
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div className='home'>
      <Category/>
      <BannerCarousel/>
      <Products/>
      <Footer/>
    </div>
  )
}

export default Home