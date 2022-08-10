import React from 'react'
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md'
import { IoColorFill } from 'react-icons/io5'
import { BsFillCalendarDateFill, } from 'react-icons/bs'
import { ImPhone } from 'react-icons/im'
import { FaDollarSign } from 'react-icons/fa'

function BannerItem({ product }) {
    return (
        <div className="banner_item">
            <div className="banner_item_photo">
                <img src={product.img} alt="avto" title={product.name} />
            </div>
            <div className="banner_item_info">
                <p className='productName'><MdOutlineDriveFileRenameOutline />  Nomi: <b> {product.name.split()[0].toLocaleUpperCase()} </b></p>
                {product.color ?
                    <p className='productName' ><IoColorFill /> Rangi: <b>{product.color}</b></p>
                    : <></>
                }
                {product.year ?
                    <p className='productName'><BsFillCalendarDateFill /> Yili: <b>{product.year}</b></p>
                    : <></>
                }
                <p className='productName' ><FaDollarSign /> Narxi: <b>{product.price}</b></p>
                <a className='productName'  href={`tel:${product.phoneNumber}`} ><ImPhone /> <b style={{ color: "#2EAFF5" }}>+998{product.phoneNumber}</b></a>
                <p className='productAddDate'>02-08-2022</p>
            </div>
        </div>
    )
}

export default BannerItem