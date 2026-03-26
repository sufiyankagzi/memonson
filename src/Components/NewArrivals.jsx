import { useRef } from 'react';
import { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import ProductModal from "../Components/ProductModal";
import categoryData from '../Data/CategoryData';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { openModal } from "../Store/Slices/ProductModalSlice";

const NewArrivals = () => {
    const dispatch = useDispatch();
    const swiperRef = useRef(null);
    const [activeGroup, setActiveGroup] = useState("Adult");
    const [activeSubgroup, setActiveSubgroup] = useState("");
    const [selectedSize, setSelectedSize] = useState(1);
    
    const filteredItems = categoryData
    .flatMap(group => group.items) // sabhi items ko ek array me merge kar de
    .filter(item => item.sb === "New Arrival");

    const getPrice = (item, size = selectedSize) => {
        const group = item.sizes.find(g => g.sizes.includes(size));
        return group ? group.mrp : 0;
    }
    return (
        <div className='mt-8 relative w-full flex flex-col items-center justify-center bg-[#D6DDD2]  gap-8 p-4'>
            <div className='w-full flex flex-row justify-between items-center pt-4 px-5 '>
                <h3 className='font-bebasneu text-4xl text-center'>New Arrivals</h3>
                <div className='flex flex-row gap-4 '>
                    <div className="cursor-pointer text-black bg-[#F3F2EE] p-4  shadow-md" onClick={() => swiperRef.current?.slidePrev()}><IoIosArrowBack className='text-xl' /></div>
                    <div className="cursor-pointer text-black bg-[#F3F2EE] p-4  shadow-md" onClick={() => swiperRef.current?.slideNext()}><IoIosArrowForward className='text-xl' /></div>
                </div>
            </div>
            {/* Slider */}
            <div className='relative w-full  px-3 '>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={15}
                    slidesPerView={1.2}
                    navigation
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000 }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 4 },
                    }}
                >
                    {filteredItems?.map((item) => (
                        <SwiperSlide key={item.id} className='bg-brand-light border rounded-3xl'>
                            <div className='relative rounded-3xl  text-center  hover:shadow-xl transition-all duration-300 group bg-brand-white'>
                                <div className='absolute z-10 top-8 left-8 px-4 py-1 border bg-brand-block  font-roboto text-xs'>
                                    {item.sb}
                                </div>
                                {/* Image */}
                                <div className='aspect-[4/5] overflow-hidden cursor-pointer bg-white rounded-3xl flex items-center justify-center' onClick={() => dispatch(openModal(item))}>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className='max-h-full max-w-full object-contain group-hover:scale-110 transition duration-300 m-3 '
                                    />
                                </div>

                                {/* Product Info */}
                                <div className='bg-[#F3F2EE] rounded-3xl m-2  p-2 font-roboto flex flex-col justify-center items-center'>
                                    <p className='mt-2 font-medium'>{item.name}</p>
                                    <p className='mt-1 text-sm text-gray-700 font-bold'>₹ {getPrice(item).toFixed(2)}</p>
                                    <p className='mt-1 text-sm text-gray-700'>{item.disc} % Off</p>
                                    {/* Add to Cart Button */}
                                    <div className='flex flex-col p-3 sm:flex-row text-center justify-center items-center w-full gap-3 sm:gap-4'>
                                        <button className='w-full sm:w-auto px-20 sm:px-10 py-2 border border-brand-btn bg-brand-btn text-white rounded transition-all duration-300 hover:bg-white hover:text-brand-btn hover:scale-105'>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <ProductModal />
        </div>

    );
};

export default NewArrivals;