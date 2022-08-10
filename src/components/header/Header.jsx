import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import tg from '../../assets/tg.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/insta.png'
import tiktok from '../../assets/tik-tok.png'
import logo from '../../assets/logonew.jpg'
import avtomobiles from '../../assets/hdrCar.png'
import uyJoy from '../../assets/uyJoy.png'
import mobileTex from '../../assets/hdrPhones.jfif'
import kirmowina from '../../assets/kirmowina.png'
import xizmatTex from '../../assets/xizmatTex.png'
import oziqOvqat from '../../assets/oziqOvqat.png'
import mebellar from '../../assets/mebellar2.jfif'
import ishbor from '../../assets/iahbor.jfif'
import {IoGrid} from 'react-icons/io5' 


function Header() {
  return (
    <div className='header'>
      <div className="header_top">
        <div className="hdr_logo">
          <Link to="/login">
            <img className='hrd_top_logo' src={logo} alt="" />
          </Link>
          <b>Keng tarmoqli <br className='hdr_br' /> Tez bozor</b>
        </div>
        <div className="hdr_sociall_networks">
          <a target='blank' href="https://t.me/elonbering_uz">
            <img src={tg} alt="telegram" />
          </a>
          <a target='blank' href='https://www.instagram.com/elonbering_uz'>
            <img src={instagram} alt="instagram" />
          </a>
          <a target='blank' href="https://youtube.com/channel/UCO-kphng8ADTfvcwNq7A_6w">
            <img src={youtube} alt="youtube" />
          </a>
          
          <a target="blank" href="https://www.tiktok.com/@elonbering_uz/video/7120040414282829057?_r=1&u_code=e2dch5m0034k70&preview_pb=0&language=uz&_d=e2dcgk46e2j649&share_item_id=7120040414282829057&source=h5_m&timestamp=1657763618&user_id=7113253047019258885&sec_user_id=MS4wLjABAAAABO4xrRC31Uk0gU6QC3bbyj-_chsMj6s0U1Htg2S3zH6axaA717tvzNCHoNwkv9Dv&utm_source=copy&utm_campaign=client_share&utm_medium=android&share_iid=7113253051554006790&share_link_id=d6ffc73f-b038-4e41-b6ee-df27b722eadc&share_app_id=1233&ugbiz_name=Main">
            <img className='tiktokIcon' src={tiktok} alt="" />
          </a>
        </div>
        {/* <a className='hdr_phoneNumber' href="tel:+998939119572">+998939119572</a> */}
      </div>

      {/* header_center */}

      <div className="header_center">
        <div className="hdr_center_section">
          <Link to="/" className="hdr_center_item">
            <IoGrid/>
            <p>Barchasi</p>
          </Link>
          <Link to="/avtomobile" className="hdr_center_item">
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
            <img src={kirmowina} alt="avtomobiles" />
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
          <Link to="/ishbor" className="hdr_center_item">
            <img src={ishbor} alt="avtomobiles" />
            <p>Ishbor(mi?) </p>
          </Link>
          {/* <Link to="/hayvonot" className="hdr_center_item">
            <img src={ishbor} alt="avtomobiles" />
            <p>Hayvonot</p>
          </Link> */}
        </div>
      </div>
    </div>
  )
}

export default Header