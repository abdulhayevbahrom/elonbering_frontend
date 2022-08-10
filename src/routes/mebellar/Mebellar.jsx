import React from 'react'
import './Mebellar.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

function Mebellar() {
    return (
        <div className='mebellar'>
            <Header />
            <div className="mebellarContainer">
                <h1 style={{ textAlign: "center", marginTop: "40px" }}>Ushbu bo'limda hozircha ma'lumot yo'q.</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Mebellar