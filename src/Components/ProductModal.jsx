import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../Store/Slices/ProductModalSlice";
import { MdOutlineClose } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { TbRulerMeasure } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa6";
import { CiShare2 } from "react-icons/ci";
import { BsArrowReturnLeft } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { RiSecurePaymentFill } from "react-icons/ri";
const ProductModal = () => {
    const dispatch = useDispatch();
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    const { isOpen, product } = useSelector(
        (state) => state.productModal
    );
     
    const handleWhatsApp = () => {
  const phoneNumber = "919409541100"; // 👉 apna number (country code ke saath)
  const baseURL = "https://memonson.netlify.app"; // ✅ Netlify site URL
  const imageURL = selectedImage ? baseURL + selectedImage : ""; // selectedImage = "/assets/img/men1.png" from public folder

  const message = `
Hello, I want to enquire about this product:

Name: ${product.name}
Size: ${selectedSize}
Color: ${selectedColor?.name}
Price: ₹${getPrice(product, selectedSize)}

Image: ${imageURL}
`;

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};

    useEffect(() => {
        if (product) {
            const firstColor = product.color?.[0];
            setSelectedColor(firstColor);
            setSelectedImage(firstColor?.images?.[0]); // ✅ correct
            const firstSize = product.sizes?.[0]?.sizes?.[0]; // first group ka first size
        setSelectedSize(firstSize);
        }
    }, [product]);

    const getPrice = (item, size) => {
        const group = item.sizes.find((g) => g.sizes.includes(size));
        return group ? group.mrp : 0;
    };

useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape" && isOpen) {
                dispatch(closeModal());
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [isOpen, dispatch]);


    if (!isOpen || !product) return null;
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 sm:p-4 overflow-y-auto" onClick={() => dispatch(closeModal())}>
            <div className="bg-white flex flex-col md:flex-row gap-5 w-full max-w-[95%] md:w-[80%] max-h-[90vh] overflow-y-auto  p-4 sm:p-5 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => dispatch(closeModal())} className="absolute top-3 bg-transparent right-3 text-xl hover:text-red-800"><MdOutlineClose /></button>
                <div className="relative flex flex-col w-full justify-between text-center">
                    <div className=" w-full h-[250px] sm:h-[350px] md:h-[550px] bg-[#F3F2EE] flex items-center justify-center">
                        <button onClick={() => dispatch(closeModal())} className="sm:hidden absolute top-3 bg-transparent right-3 text-xl hover:text-red-800"><MdOutlineClose /></button>
                        <img src={selectedImage || product.img} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex gap-3 flex-wrap justify-center bg-white] py-4 px-1  rounded">
                        {selectedColor?.images?.map((img, i) => (
                            <img key={i} src={img} onClick={() => setSelectedImage(img)} className={`w-12 h-12 sm:w-14 sm:h-14 object-cover border cursor-pointer rounded  ${selectedImage === img ? "border-black scale-105" : "border-gray-300"}`}/>
                        ))}
                        </div>
                </div>
                
                <div className="w-full space-y-2 ">
                    <span className="py-1 px-3 bg-brand-block font-roboto text-xs">{product.sb}</span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebasneu mt-3">{product.name}</h2>
                    <div className="flex items-center gap-1 mt-2">
                        {[1, 2, 3, 4].map((star) => (
                            <IoStar key={star} />
                        ))}
                        <span className="mx-3 px-4 bg-gray-300 font-roboto text-sm">{product.starreview}</span>
                    </div>
                    <h2 className="text-1xl font-roboto py-3 text-gray-400">Article No. : {product.articleNo}</h2>
                    <span className="font-bebasneu text-2xl"> Rs. {selectedSize ? getPrice(product, selectedSize).toFixed(2) : "--"} </span>
                    <span className="px-3 font-normal font-roboto text-rose-800">{product.disc} Off</span>
                    <h2 className="text-sm font-roboto  text-green-600">(Mrp. Incl. of all taxes)</h2>
                    <div className="flex items-center gap-4 mt-4 font-roboto">
                        <span className="font-medium">Select Size:</span>
                        <span className="flex items-center gap-2 cursor-pointer text-sm font-roboto"><TbRulerMeasure />SIZE CHART</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {product.sizes.map((group) =>
                            group.sizes.map((size) => (
                                <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 border rounded transition ${selectedSize === size ? "bg-black text-white border-black" : "border-gray-400 hover:border-black"}`}>{size}</button>
                            )))}
                    </div>

                    <p className="mt-4 font-medium">Select Color:</p>
                    <div className="flex gap-3 mt-2">
                        {product.color?.map((c) => (
                            <button key={c.name} onClick={() => { setSelectedColor(c); setSelectedImage(c.images[0]); }} className={`w-14 h-14 rounded border-2 transition ${selectedColor?.name === c.name ? "border-black scale-110" : "border-gray-300"}`}>
                                <img src={c.images[0]} alt={c.name} className="w-full h-full object-cover rounded" />
                            </button>
                        ))}
                    </div>
                    <div className="py-  rounded-lg  flex gap-2  flex-col  justify-start">
                        <div className="flex items-center gap-2 font-roboto">
                            <span className="font-medium text-xl"><RiSecurePaymentFill /></span>
                            <span className="flex items-center gap-1 cursor-pointer text-sm font-roboto">100% Original</span>
                        </div>
                        <div className="flex items-center gap-2 font-roboto">
                            <span className="font-medium text-xl"><CiDeliveryTruck /></span>
                            <span className="flex items-center gap-1 cursor-pointer text-sm font-roboto">Free Delivery on items above Rs.999/-</span>
                        </div>
                        <div className="flex items-center gap-2 font-roboto">
                            <span className="font-medium text-xl"><BsArrowReturnLeft /></span>
                            <span className="flex items-center gap-1 cursor-pointer text-sm font-roboto">Easy 15 days returns and refunds</span>
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-center justify-end p-3">
                        <button onClick={handleWhatsApp} className='w-full sm:w-auto px-5 sm:px-5 py-2 font-roboto text-sm border-brand-btn bg-brand-btn text-white border transition-all duration-300 hover:bg-brand-block hover:text-brand-btn hover:scale-105'>
                            Enquire Now
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductModal;