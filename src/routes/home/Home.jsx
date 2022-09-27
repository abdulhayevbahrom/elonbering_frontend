import React from 'react'
import Products from '../../components/Products/Products'
import './Home.css'
import Category from "../../components/category/Category"

function Home() {
  return (
    <div className='home'>
      <Category/>
      <Products/>
    </div>
  )
}

export default Home