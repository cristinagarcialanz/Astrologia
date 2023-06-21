import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../estilos/zodiaco.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import img_1 from '../img/12.png';
import img_2 from '../img/13.png';
import img_3 from '../img/14.png';
import img_4 from '../img/15.png';
import img_5 from '../img/16.png';
import img_6 from '../img/17.png';
import img_7 from '../img/18.png';
import img_8 from '../img/19.png';
import img_9 from '../img/20.png';
import img_10 from '../img/21.png';
import img_11 from '../img/22.png';
import img_12 from '../img/23.png';
import img_13 from '../img/24.png';

function Zodiaco() {
  return (
    <div className="container">
      <h1 className="heading">Astrología</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={img_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_10} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_11} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_12} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={img_13} alt="slide_image" />
        </SwiperSlide>
        
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Zodiaco;
      
