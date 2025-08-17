"use client"; 

import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
// import 'swiper/css.min.css';
// import 'swiper/css/navigation.min.css';
// import 'swiper/css/pagination.min.css';
// import 'swiper/css/scrollbar.min.css';
// declare module "swiper/css";
// declare module "swiper/css/navigation";
// declare module "swiper/css/pagination";
// import 'swiper/swiper-bundle.min.css'


// import 'swiper/swiper.css';
// import 'swiper/modules/navigation/navigation.css';
// import 'swiper/modules/pagination/pagination.css';
// import 'swiper/modules/pagination/scrollbar.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import Slide1 from './Slide1';
import Slide2 from './Slide2';
import Slide3 from './Slide3';



export default function Slider() {
  return (
    <div className='h-full w-[100vw]'>
      <Swiper
        className='max-h-[78.5vh]'
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={30}
        speed={1}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false
        }}
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Slide1></Slide1>
        </SwiperSlide>
        <SwiperSlide>
          <Slide2></Slide2>
        </SwiperSlide>
        <SwiperSlide>
          <Slide3></Slide3>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}