import React from 'react'
import './BannerItemInfos.css'
import Header from '../header/Header' 
import {MdOutlineDriveFileRenameOutline} from 'react-icons/md'
import {IoColorFill} from 'react-icons/io5'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import { FaDollarSign } from 'react-icons/fa'


function BannerItemInfos() {
  return (
    <div className='bannerItemInfos'>
        <Header/>
        <div className="bannerItemInfosContainer">
          <div className="bannerItemInfosImages">
            <img src="" alt="" />
          </div>
          <div className="bannerItemInformations">
            <p><MdOutlineDriveFileRenameOutline />Nomi:<b>Malibu</b></p>
            <p><IoColorFill/>Rangi:<b>Qizil</b></p>
            <p><BsFillCalendarDateFill />Yili:<b>2022</b></p>
            <p><IoColorFill/>Kraska:<b>10 %</b></p>
            <p><IoColorFill/>Probeg:<b>230,000</b></p>
            <p><IoColorFill/>Yoqilg'i turi<b>Gaz benzin</b></p>
            <p><FaDollarSign/>Manzil<b>Namangan</b><FaDollarSign/></p>

            
          </div>
        </div>
    </div>
  )
}

export default BannerItemInfos