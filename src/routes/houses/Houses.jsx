import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Houses.css'
import { houses } from '../../data/houseData'

import { ImPhone } from 'react-icons/im'
import {FaDollarSign, FaHome} from 'react-icons/fa' 
import {BsFillGrid1X2Fill} from 'react-icons/bs'
import {FaMapMarkerAlt} from 'react-icons/fa'

function Houses() {
    return (
        <div className='houses'>
            <Header />
            <div className="housesContainer">
                {houses.map(houseItem => 
                <div className="housesContainer_item"> 
                    <img src={houseItem.img} alt="" />
                    <p><FaHome/> Maydoni: <b> {houseItem.maydoni} sotix</b></p>
                    <p><BsFillGrid1X2Fill/> Xonalar soni: <b>{houseItem.xonalarSoni} ta</b></p>
                    <p><FaMapMarkerAlt className='house_location'/> Manzil:<b> {houseItem.manzili}</b></p>
                    <p><FaDollarSign/> Narxi:<b> {houseItem.narxi} <FaDollarSign/></b></p>
                    <a href={`tel:${houseItem.telefon}`}><ImPhone/> +998{houseItem.telefon}</a>
                    <p><span>04-08-2022</span></p>
                </div>
           )}
            </div>
            <Footer/>
        </div>
    )
}

export default Houses
