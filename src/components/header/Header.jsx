import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import tg from '../../assets/tg.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/insta.png'
import facebook from '../../assets/facebook.png'
import logo from '../../assets/logonew.jpg'
import avtomobiles from '../../assets/hdrCar.png'
import uyJoy from '../../assets/uyJoy.png'
import mobileTex from '../../assets/mobileTex.png'
import kirmowina from '../../assets/kirmowina.png'
import xizmatTex from '../../assets/xizmatTex.png'
import oziqOvqat from '../../assets/oziqOvqat.png'
import mebellar from '../../assets/mebellar2.jfif'
import barchasi from '../../assets/barchasi.png'
// import {FaUserTie} from 'react-icons/fa' 


function Header() {
  return (
    <div className='header'>
      <div className="header_top">
        <div className="hdr_logo">
          <Link to="/login"><img className='hrd_top_logo' src={logo} alt="" /></Link>
        </div>
        <div className="hdr_sociall_networks">
          <a target='blank' href="https://t.me/elonbering_uz"><img src={tg} alt="telegram" /></a>
          <a target='blank' href="https://youtube.com/channel/UCO-kphng8ADTfvcwNq7A_6w"><img src={youtube} alt="youtube" /></a>
          <a target='blank' href='https://www.instagram.com/elonbering_uz'><img src={instagram} alt="instagram" /></a>
          <a target="blank" href="https://www.facebook.com/profile.php?id=100082467521287"><img src={facebook} alt="" /></a>
        </div>
        {/* <a className='hdr_phoneNumber' href="tel:+998939119572">+998939119572</a> */}
      </div>

      {/* header_center */}

      <div className="header_center">
        <div className="hdr_center_section">
          <Link to="/"className="hdr_center_item">
            <img className='all' src={barchasi} alt="avtomobiles" />
            <p>Barchasi</p>
          </Link>
          <Link to="/avtomobile"className="hdr_center_item">
            <img src={avtomobiles} alt="avtomobiles" />
            <p>Avtomobil</p>
          </Link>
          <Link to="/houses" className="hdr_center_item">
            <img src={uyJoy} alt="avtomobiles" />
            <p>Uy-joy</p>
          </Link>
          <Link to="./mobile" className="hdr_center_item">
            <img src={mobileTex} alt="avtomobiles" />
            <p>Mobile</p>
          </Link>
          <Link to="/maishiyTexnikalar" className="hdr_center_item">
            <img src={kirmowina} alt="avtomobiles"/>
            <p>Maishiy</p>
          </Link>
          <Link to="/texnikalar" className="hdr_center_item">
            <img src={xizmatTex} alt="avtomobiles" />
            <p>Texnikalar</p>
          </Link>
          <Link to="/oziqovqat" className="hdr_center_item">
            <img src={oziqOvqat} alt="avtomobiles" />
            <p>Oziq-ovqat</p>
          </Link>
          <Link to="/mebel" className="hdr_center_item">
            <img src={mebellar} alt="avtomobiles" />
            <p>Mebellar</p>
          </Link>
          {/* <Link to="/admin" className="hdr_center_item">
            <FaUserTie className='admin_icon'/>
            <p>Admin</p>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Header