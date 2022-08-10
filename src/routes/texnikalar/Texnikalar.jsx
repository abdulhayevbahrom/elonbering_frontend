import React from 'react'
import './Texnikalar.css'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
function Texnikalar() {
    return (
        <div className='texnikalar'>
            <Header />
            <div className="TexnikalarContainer">
                <h1 style={{textAlign:"center", marginTop:"40px"}}>Ushbu bo'limda hozircha ma'lumot yo'q.</h1>
            </div>
            <Footer/>
        </div>
    )
}

export default Texnikalar