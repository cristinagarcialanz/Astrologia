import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../estilos/home.css'

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import img_1 from '../img/1.jpeg';
import img_2 from '../img/2.jpeg';
import img_3 from '../img/3.jpg';
import img_4 from '../img/4.jpeg';
import img_5 from '../img/5.jpg';
import img_6 from '../img/6.jpeg';
import img_12 from '../img/12.png';

function Home() {
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
          <img src={img_12} alt="slide_image" />
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

export default Home;
      
