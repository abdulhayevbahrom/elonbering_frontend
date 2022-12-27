import React from 'react'
import './BannerCarousel.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { bannerCarousel_data } from '../../static/bannerCarousel_data';
import SwiperCore, { EffectFade, Autoplay, Pagination, Navigation, } from "swiper";
SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);


function BannerCarousel() {
    return (
            <Swiper
                className='MainHeaderSwiperWrapper'
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {
                    bannerCarousel_data?.map((item, index) =>
                        <SwiperSlide className='swiperSlide' key={index}>
                            <img className='banner_carousel_img' src={item} alt="name" />
                        </SwiperSlide>
                    )
                }

            </Swiper>
    )
}

export default BannerCarousel