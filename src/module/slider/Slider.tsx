import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
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