import React from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './summery.module.css'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css"
import "swiper/components/pagination/pagination.min.css"

// import Swiper core and required modules
import SwiperCore, {
    EffectCube, Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);



const CardSlider = () => {
    return (
        <div className={'cardSlider'}>
            <p>Վճարամիջոցներ</p>
            <Swiper effect={'cube'} grabCursor={true} cubeEffect={{
                "shadow": true,
                "slideShadows": true,
                "shadowOffset": 20,
                "shadowScale": 0.94
            }} pagination={true} className="mySwiper">
                <SwiperSlide>
                    <img src="assets/images/visa-gold.png" className={styles.cardImg}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/images/idram.png" className={styles.cardImg}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/images/visa-gold.png" className={styles.cardImg}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="assets/images/idram.png" className={styles.cardImg}/>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default CardSlider