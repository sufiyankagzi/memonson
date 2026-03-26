import { useRef } from 'react';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import ProductModal from "../Components/ProductModal";
import categoryData from '../Data/CategoryData';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { openModal } from "../Store/Slices/ProductModalSlice";

const ShopByCategory = () => {
    const dispatch = useDispatch();
    const swiperRef = useRef(null);
    // const [selectedProduct, setSelectedProduct] = useState(null);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const [activeGroup, setActiveGroup] = useState("Adult");
    const [activeSubgroup, setActiveSubgroup] = useState("Men");
    const [selectedSize, setSelectedSize] = useState(1);

    // const selectedCategory = categoryData.find(
    //     (cat) => cat.subgroup === activeCategory
    // );

    const selectedGroup = categoryData.find(
        (cat) => cat.group === activeGroup
    );

    const filteredItems = selectedGroup?.items.filter(
        (item) => item.subgroup === activeSubgroup
    );

    const getPrice = (item, size = selectedSize) => {
        const group = item.sizes.find(g => g.sizes.includes(size));
        return group ? group.mrp : 0;
    }
    return (
        <div className='relative w-full flex flex-col items-center justify-center  gap-8 p-4'>
            <h3 className='font-playfair text-3xl text-center'>Shop By Category</h3>

            {/* Category Buttons */}
            <div className='flex flex-col items-center w-full gap-2  '>
                {/* Category Buttons */}
                <div className='flex flex-wrap justify-center gap-4 w-full'>
                    {[
                        { label: "Men", value: "Men", group: "Adult" },
                        { label: "Women", value: "Women", group: "Adult" },
                        { label: "Boys", value: "Boys", group: "Kids" },
                        { label: "Girls", value: "Girls", group: "Kids" },
                    ].map((item, i) => (
                        <button
                        key={item.value}
                            onClick={() => {
                                setActiveGroup(item.group);
                                setActiveSubgroup(item.value);
                            }}
                            className="relative h-12 w-28 sm:w-32 border border-brand-btn text-brand-btn overflow-hidden group"
                        >
                            {/* Background Fill */}
                            <span className="absolute inset-0 bg-brand-btn transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>

                            {/* ✨ Shine Effect */}
                            <span className="absolute top-0 left-[-75%] w-[50%] h-full 
bg-gradient-to-r from-transparent via-white/60 to-transparent 
skew-x-12 group-hover:left-[125%] transition-all duration-700"></span>

                            {/* Active State */}
                            {activeSubgroup === item.value && (
                                <span className="absolute inset-0 bg-brand-btn"></span>
                            )}

                            {/* Text */}
                            <span className={`relative z-10 transition duration-300 
    group-hover:text-white 
    ${activeSubgroup === item.value ? 'text-white' : ''}`}>
                                {item.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Arrows Below Buttons */}
                <div className='flex gap-4 pt-4'>
                    <div
                        className="cursor-pointer text-black bg-[#F3F2EE] p-4  shadow-md"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <IoIosArrowBack className='text-xl' />
                    </div>

                    <div
                        className="cursor-pointer text-black bg-[#F3F2EE] p-4  shadow-md"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <IoIosArrowForward className='text-xl' />
                    </div>
                </div>
            </div>


            {/* Slider */}
            <div className='relative w-full px-3 '>


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
                        <SwiperSlide key={item.id} className='bg-brand-light border rounded'>
                            <div className='relative p-3 text-center rounded-lg hover:shadow-xl transition-all duration-300 group bg-brand-light'>
                                <div className='absolute z-10 top-8 left-8 px-4 py-1 border bg-brand-block  font-roboto text-xs'>
                                    {item.sb}
                                </div>
                                {/* Image */}
                                <div className='aspect-[4/5] overflow-hidden cursor-pointer bg-white flex items-center justify-center' onClick={() => dispatch(openModal(item))}>
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className='max-h-full max-w-full object-contain group-hover:scale-110 transition duration-300'
                                    />
                                </div>

                                {/* Product Info */}
                                <div className='bg-[#F3F2EE]  p-2 font-roboto flex flex-col justify-center items-center'>
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

export default ShopByCategory;