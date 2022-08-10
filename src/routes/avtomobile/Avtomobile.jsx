import React from 'react'
import Header from '../../components/header/Header'
import './Avtomobile.css'
import { allDatas } from '../../data/data'
import loader2 from '../../assets/loader2.svg'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { IoColorFill } from 'react-icons/io5'
import { BsFillCalendarDateFill,} from 'react-icons/bs'
import { ImPhone } from 'react-icons/im'
import {FaDollarSign} from 'react-icons/fa'
import Footer from '../../components/footer/Footer'

function Avtomobile() {
  return (
    <div>
        <Header/>
        <div className='banner'>
            {!allDatas.length ? <img src={loader2} alt="" /> :
                allDatas.map((product, index) =>
                    <div key={index} className="banner_item">
                        <div className="banner_item_photo">
                            <img src={product.img} alt="avto" title={product.name} />
                        </div>
                        <div className="banner_item_info">
                            <p style={product.name.length >= 14 ? { fontSize: '16px' } : { fontSize: '21px' }} className='productName'><MdOutlineDriveFileRenameOutline />  Nomi: <b> {product.name.split()[0].toLocaleUpperCase()} </b></p>
                            {product.color ?
                                <p className='productName'  style={product.name.length >= 14 ? { fontSize: '16px' } : { fontSize: '21px' }}><IoColorFill /> Rangi: <b>{product.color}</b></p>
                                : <></>
                            }
                            {product.year ?
                                <p className='productName' style={product.name.length >= 14 ? { fontSize: '16px' } : { fontSize: '21px' }}><BsFillCalendarDateFill /> Yili: <b>{product.year}</b></p>
                                : <></>
                            }
                            <p className='productName' style={product.name.length >= 14 ? { fontSize: '16px' } : { fontSize: '21px' }}><FaDollarSign /> Narxi: <b>{product.price}</b></p>
                            <a className='productName' style={product.name.length >= 14 ? { fontSize: '16px' } : { fontSize: '21px' }} href={`tel:${product.phoneNumber}`} ><ImPhone /> <b style={{ color: "#2EAFF5" }}>+998{product.phoneNumber}</b></a>
                            <p className='productAddDate'>02-08-2022</p>
                        </div>
                    </div>
                )}
        </div>

        <Footer/>
        
    </div>
  )
}

export default Avtomobile