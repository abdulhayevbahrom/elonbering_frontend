import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Categories from "../../components/categories/Categories"
import BannerCarousel from '../../components/bannerCarousel/BannerCarousel'
import Products from '../../components/Products/Products'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div className='home'>
      <div className="home_navbar">
        <Header />
        <Categories />
      </div>
      <BannerCarousel />
      <Products />
      <Footer />
    </div>
  )
}

export default Home