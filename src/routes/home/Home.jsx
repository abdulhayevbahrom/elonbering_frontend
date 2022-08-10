import React from 'react'
import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import './Home.css'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <div className='home'>
      <Header/>
      <Banner/>
      <Footer/>
    </div>
  )
}

export default Home