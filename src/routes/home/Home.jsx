import React from 'react'
import BannerCarousel from '../../components/bannerCarousel/BannerCarousel'
import Footer from '../../components/footer/Footer'


function Home() {
  return (
    <div className='home'>
      <BannerCarousel/>
      <Footer/>
    </div>
  )
}

export default Home