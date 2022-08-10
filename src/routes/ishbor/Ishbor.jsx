import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './Ishbor.css'

function Ishbor() {
  return (
    <div className='ishbor'>
        <Header/>
        <div className="ishborContainer">
            <h1 style={{ textAlign: "center", marginTop: "40px" }}>Ushbu bo'limda hozircha ma'lumot yo'q.</h1>
        </div>
        <Footer/>
    </div>
  )
}

export default Ishbor