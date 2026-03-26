import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { IoIosArrowForward,IoIosArrowBack } from "react-icons/io";
import { useRef } from 'react';
import 'swiper/css';
const Header = () => {
  const swiperRef = useRef(null);
  return (
    <div className="relative w-full bg-brand-back p-3 flex items-center justify-center">
      
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white" onClick={() => swiperRef.current?.slidePrev()}>
          <IoIosArrowBack />
      </div>

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        slidesPerView={1}
        className="w-full text-brand-light text-sm"
      >
        <SwiperSlide className="flex items-center justify-center text-center w-full">Free Shipping Above 999/-</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-center w-full">Start Your Journey with Us 🔥 Special Offer Inside!</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-center w-full">Step Into Style 👟 Latest Sneakers Available!</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-center w-full">New Arrivals 🚀 Fresh Styles Just Dropped!</SwiperSlide>
        <SwiperSlide className="flex items-center justify-center text-center w-full">Walk with Confidence 💯 Premium Quality Shoes</SwiperSlide>
      </Swiper>

      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-10 cursor-pointer text-white" onClick={() => swiperRef.current?.slideNext()}>
          <IoIosArrowForward />
      </div>

    </div>
  );
};

export default Header;