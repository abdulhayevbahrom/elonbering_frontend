import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Banner.css'
import { allDatas } from '../../data/data'
import loader from '../../assets/loader.svg'

function Banner() {
    const [allData, setAllData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:7000/create/baza/allProduct')
            .then(res => setAllData(res.data.reverse()))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className='banner' style={!allData.length ? {background:"#fff"} : {background:"#c2c2c2"}}>
             <div className="banner_container">
                {!allDatas.length ? <img src={loader} alt="" />  : 
                allDatas.map((product, index) =>
                    <div key={index} className="banner_item">
                        <div className="banner_item_photo">
                            <img src={product.img} alt="avto" title={product.name} />
                        </div>
                        <div className="banner_item_info">
                            <p style={product.name.length >= 14 ? { fontSize: '14px' } : { fontSize: '16px' }} className='avtomobileName'>Nomi: <b>{product.name.split()[0].toLocaleUpperCase()} </b></p>
                            {product.color ? 
                            <p className='avtomobileColor'>Rangi: <b>{product.color}</b></p>
                                : <></>
                        }
                            {product.year ?
                                <p className='avtomobileYear'>Yili: <b>{product.year}</b></p>
                                : <></>
                            }
                            <p className='productPrice'>Narxi: <b>{product.price}</b></p>
                            <p className='authorNumber'>Tel: <b>+998{product.phoneNumber}</b></p>
                            {/* <p className="item_date">
                                {[...product?.date].splice(0, [...product?.date].indexOf("T")).join("")}
                            </p> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Banner


// https://www.youtube.com/watch?v=GyzC-30Bqfc