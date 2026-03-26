import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination,EffectFlip } from 'swiper/modules';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination'
// import slide1 from '../assets/img/Banner1.png'
// import slide2 from '../assets/img/Banner2.png'
// import slide3 from '../assets/img/Banner3.png'
// import slide4 from '../assets/img/Banner4.png'


const HomeSlider = () => {
  const swiperRef = useRef(null);
  return (
    <div className="relative w-full bg-brand-back p-0 flex items-center justify-center">
      
      <div className="absolute left-12 top-1/2 -translate-y-1/2 z-10 cursor-pointer hover:opacity-100 bg-brand-light p-1 md:p-3 text-3xl opacity-40 text-brand-block" onClick={() => swiperRef.current?.slidePrev()}>
          <IoIosArrowBack />
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[EffectFlip,Autoplay,Pagination]}
        pagination={{ clickable: true }}
        effect="flip"
        autoplay={{ delay: 3000 }}
        loop={true}

        navigation
        slidesPerView={1}
        className="custom-swiper w-full text-brand-light text-sm"
      >
        <SwiperSlide>
  <img
    src="/assets/img/Banner1.png"
    className="w-full h-[400px] md:h-[500px] object-cover"
    alt="Banner 1"
  />
</SwiperSlide>

<SwiperSlide>
  <img
    src="/assets/img/Banner2.png"
    className="w-full h-[400px] md:h-[500px] object-cover"
    alt="Banner 2"
  />
</SwiperSlide>

<SwiperSlide>
  <img
    ssrc="/assets/img/Banner3.png"
    className="w-full h-[400px] md:h-[500px] object-cover"
    alt="Banner 3"
  />
</SwiperSlide>
<SwiperSlide>
  <img
    src="/assets/img/Banner4.png"
    className="w-full h-[400px] md:h-[500px] object-cover"
    alt="Banner 4"
  />
</SwiperSlide>
      </Swiper>

      <div className="absolute right-12 cursor-pointer top-1/2 -translate-y-1/2 z-10 cursor-pointe bg-brand-light hover:opacity-100 p-1 md:p-3 text-3xl opacity-40 text-brand-block" onClick={() => swiperRef.current?.slideNext()}>
          <IoIosArrowForward />
      </div>

    </div>
  );
};

export default HomeSlider;
