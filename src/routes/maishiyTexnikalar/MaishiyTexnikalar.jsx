import React from 'react'
import Header from '../../components/header/Header'
import './MaishiyTexnkalar.css'
import {maishiyData} from '../../data/maishiyData'
import {FaDollarSign} from 'react-icons/fa' 
import {ImPhone} from 'react-icons/im'
import Footer from '../../components/footer/Footer'


function MaishiyTexnikalar() {
    return (
        <div className='maishiyTenikalar'>
            <Header />
            <div className="maishiyTexnikalar_container">
                {maishiyData.map(maishiyTex_item =>
                    <div className="maishiyTexnikalar_container_item">  
                        <img src={maishiyTex_item.img} alt="" />
                        <p><FaDollarSign/> Narxi: <b>{maishiyTex_item.price}</b></p>
                        <a href={`tel:${maishiyTex_item.phoneNumber}`}><ImPhone/> +998{maishiyTex_item.phoneNumber}</a>
                        <p><span>04-08-2022</span></p>
                    </div> 
                    )}
            </div>
            <Footer/>
        </div>
    )
}

export default MaishiyTexnikalar