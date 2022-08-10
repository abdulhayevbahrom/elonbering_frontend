import React from 'react'
import './Banner.css'
import { allDatas } from '../../data/data'
import loader2 from '../../assets/loader2.svg'
import BannerItem from '../bannerItem/BannerItem'

function Banner() {
    return (
        <div className='banner'>
            {!allDatas.length ? <img src={loader2} alt="" /> :
                allDatas.map((product, index) =>
                    <BannerItem product={product} key={index}/>
                )}
        </div>
    )
}
export default Banner

