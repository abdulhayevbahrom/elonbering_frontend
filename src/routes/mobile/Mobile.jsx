import React from 'react'
import Header from '../../components/header/Header'
import './Mobile.css'
import {phoneData} from '../../data/phoneData'
import {BsFillPhoneFill} from 'react-icons/bs'
import { ImPhone } from 'react-icons/im'
import { IoColorFill } from 'react-icons/io5'
import {RiSdCardMiniFill} from 'react-icons/ri'
import {GiBattery75} from 'react-icons/gi'
import {FaDollarSign} from 'react-icons/fa'
import Footer from '../../components/footer/Footer'



function Mobile() {
    return (
        <div className='mobile'>
            <Header />
            <div className="mobileContainer">
                {phoneData.map( phoneItem=>
                    <div className="mobileContainer_item">
                        <img src={phoneItem.img} alt="" />
                        <p><BsFillPhoneFill/>Rusumi: <b>{phoneItem.phoneName}</b></p>
                        <p><IoColorFill/>Rangi: <b>{phoneItem.rangi}</b></p>
                        <p><RiSdCardMiniFill/>Xotira: <b>{phoneItem.xotira} GB</b></p>
                        <p><GiBattery75/>Batareya: <b>{phoneItem.batareyka} mAs</b></p>
                        <p><FaDollarSign/>Narxi: <b>{phoneItem.narxi}</b></p>
                        <a href={`tel:${phoneItem.phoneNumber}`}><ImPhone/> +998{phoneItem.phoneNumber}</a>
                        <p><span>04-08-2022</span></p>
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    )
}

export default Mobile