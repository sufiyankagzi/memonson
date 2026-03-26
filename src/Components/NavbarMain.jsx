import { RiMenu2Line } from "react-icons/ri";
import { useEffect } from "react";
import { useState } from "react";
// import logo from "../assets/img/logo.png"
// import me from "../assets/img/me.png"
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { RiShoppingBag4Fill } from "react-icons/ri";
import { HiMenuAlt2 } from "react-icons/hi";
import { CgCloseR } from "react-icons/cg";
import { useRef } from "react";
function NavbarMain() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const offcanvasRef = useRef(null);
    const handleBackdropClick = (e) => {
        if (offcanvasRef.current && !offcanvasRef.current.contains(e.target)) {
            setMenuOpen(false);
            setOpenSubMenu(null);
        }
    };

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") {
                setMenuOpen(false);
                setOpenSubMenu(null);
            }
        };
        const handleBackdrop = (e) => menuOpen && handleBackdropClick(e);
        window.addEventListener("keydown", handleEsc);
        window.addEventListener('click', handleBackdrop);
        return () => {
            window.removeEventListener('keydown', handleEsc);
            window.removeEventListener('click', handleBackdrop);
        };
    }, [menuOpen]);
    return (
        <>
            <div className="sticky top-0 z-50  flex flex-col md:flex-row w-full bg-brand-light shadow-sm px-3 py-1">
                <div className="relative w-full  md:w-1/6 flex flex-row items-center justify-center py-0">
                    <div className="absolute md:hidden left-2">
                        <button className="text-2xl" onClick={() => setMenuOpen(!menuOpen)}><RiMenu2Line /></button>
                    </div>
                    <img src="/assets/img/logo.png" alt="hk holidays" className="w-[140px] p-2" />
                    
                    <div className="absolute md:hidden right-2">
                        <RiShoppingBag4Fill className="text-2xl text-brand-btn hover:text-brand-back cursor-pointer" />
                    </div>
                </div>
                <div className="w-4/6 flex items-center justify-center m-0 p-0  bg-brand-light    ">
                    <nav className="bg-brand-light relative m-0 p-0 z-10">
                        <div className="max-w-7xl  m-0 px-0 py-0 flex justify-start items-center">
                            <ul className="hidden md:flex gap-0 font-sm items-center p-0 m-0      ">
                                <li className="cursor-pointer text-brand-light hover:text-brand-light bg-brand-btn px-6 py-3 text-sm font-bold  ">HOME</li>
                                <li className="relative group cursor-pointer hover:text-brand-light hover:bg-brand-block text-sm   px-6 py-3 font-bold">
                                    MEN
                                    <ul className="font-roboto absolute left-0 top-[59px] bg-gray-700/40 backdrop-blur-md shadow-xl  
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200 w-[440px] flex gap-4 p-3">

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">All</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Boots</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Brogue Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Chappals</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Chelsea Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Sandals</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Slip Ons Shoes</span>
                                        </li>

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Clogs</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Derby Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Juties</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Loafers</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Moccasin</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Slide Slippers</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Slippers</span>
                                        </li>
                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Mojris</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Monk Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Mules</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Pvc Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Safety Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Slip ON Sandals</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Sneakers</span>
                                        </li>

                                    </ul>
                                </li>
                                <li className="relative group cursor-pointer hover:text-brand-light hover:bg-brand-block text-sm   px-6 py-3 font-bold">
                                    WOMEN
                                    <ul className="font-roboto absolute left-0 top-[59px] bg-gray-700/40 backdrop-blur-md shadow-xl  
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200 w-[440px] flex gap-4 p-3">

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">All</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Ballerinas</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Boots</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Bridal Sneakers</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Chappals</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Chelsea Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Clogs</span>
                                        </li>

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Derby Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Loafers</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Mojaris</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Mules</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Peep Toes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Pump Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">W. Slippers</span>
                                        </li>
                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Sandals</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Slide Slippers</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Slip ON Sandals</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Slip Ons Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Sneakers</span>
                                            
                                        </li>
                                    </ul>
                                </li>
                                <li className="relative group cursor-pointer hover:text-brand-light hover:bg-brand-block text-sm   px-6 py-3 font-bold">
                                    KIDS
                                    <ul className="font-roboto absolute left-0 top-[59px] bg-gray-700/40 backdrop-blur-md shadow-xl  
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200 w-[280px] flex gap-4 p-3">

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">All</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Ballerinas</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Chappals</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Clogs</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Derby Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Juties</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Loafers</span>
                                        </li>

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Mojaris</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Sandals</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Slides Slippers</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Slip Ons Shoes</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Slippers</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Sneakers</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Velcro Shoes</span>
                                        </li>

                                    </ul>
                                </li>
                                <li className="relative group cursor-pointer hover:text-brand-light hover:bg-brand-block text-sm   px-6 py-3 font-bold">
                                    BOYS
                                    <ul className="font-roboto absolute left-0 top-[59px]  bg-gray-700/40 backdrop-blur-md shadow-xl  
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200 w-44 ">
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Loafers</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Sandals</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slides Slippers</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slippers</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Sneakers</li>
                                    </ul>
                                </li>
                                <li className="relative group cursor-pointer hover:text-brand-light hover:bg-brand-block text-sm   px-6 py-3 font-bold">
                                    GIRLS
                                    <ul className="font-roboto absolute left-0 top-[59px]  bg-gray-700/40 backdrop-blur-md shadow-xl  
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200 w-44 ">
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Ballerinas</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Clogs</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Sandals</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slides Slippers</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slip Ons Shoes</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Sneakers</li>
                                    </ul>
                                </li>
                                <li className="relative group cursor-pointer hover:text-brand-light hover:bg-brand-block text-sm   px-6 py-3 font-bold">
                                    BRANDS
                                    <ul className="font-roboto absolute left-0 top-[59px] bg-gray-700/40 backdrop-blur-md shadow-xl  
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200 w-[360px] flex gap-4 p-3">

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">All</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Lexa</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Campus</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">DA Naturo</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">DHL</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Feet 4 Ever</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">TRV Sports</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Walk Line</span>
                                        </li>

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Red Tape</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Airfax</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Unistar</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Hitcolus</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Ostero</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Neoz</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">ADDA</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Welcome</span>

                                        </li>

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Chic Soles</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Airfax</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Kids Lounge</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">OOFoarm</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Ortho Rest</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">VKC</span>

                                        </li>

                                    </ul>
                                </li>
                                <li className="relative group cursor-pointer hover:text-brand-light hover:bg-brand-block text-sm   px-6 py-3 font-bold">
                                    SALE
                                    <ul className="font-roboto absolute left-0 top-[59px]  bg-gray-700/40 backdrop-blur-md shadow-xl  
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200 w-44 ">
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Under 599/-</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Under 999/-</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Under 1499/-</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Under 1999/-</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Pre Festival Deal</li>
                                    </ul>
                                </li>

                                <li className="relative group cursor-pointer hover:text-brand-light hover:bg-brand-block text-sm   px-6 py-3 font-bold">
                                    NEW ARRIVALS
                                    <ul className="font-roboto absolute left-0 top-[59px]  bg-gray-700/40 backdrop-blur-md shadow-xl  
                                            opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                            transition-all duration-200 w-44 ">
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Men</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Women</li>
                                        <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Kids</li>
                                    </ul>
                                </li>
                                <li className="cursor-pointer text-brand-light hover:text-brand-light hover:bg-brand-btn bg-brand-back px-6 py-3 text-sm font-bold  ">ME</li>
                            </ul>
                        </div>
                    </nav>


                    {/* Offcanvas menu */}
                    {menuOpen && (
                        <div
                            className="fixed inset-0 z-40 flex"
                            onClick={() => setMenuOpen(false)} // ye click bahar par close karega
                        >
                            {/* Backdrop / overlay */}
                            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
                            <div
                                className="relative w-80 h-full transform transition-transform duration-300 bg-gray-200/40 backdrop-blur-md z-40 overflow-y-auto top-0"
                                onClick={(e) => e.stopPropagation()} // menu ke andar click se close nahi hoga
                            >
                                {/* <div className={`fixed overflow-y-auto top-0 left-0 h-full w-72 bg-gray-400/40 backdrop-blur-md z-40 transform transition-transform duration-300 
                        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`} > */}

                                {/* Header */}
                                <div className="flex justify-between items-center p-4 border-b">
                                    <img src="/assets/img/logo.png" alt="hk holidays" className="px-4 py-3 w-[130px]" />
                                    <button onClick={() => setMenuOpen(false)} className="text-2xl"><CgCloseR className="text-brand-light text-md" /></button>
                                </div>

                                {/* Menu */}
                                <ul className="flex flex-col text-brand-light font-semibold">
                                    <li className="p-3">HOME</li>
                                    <li className="p-3 cursor-pointer flex justify-between"
                                        onClick={() => setOpenSubMenu(openSubMenu === "men" ? null : "men")}>
                                        MEN
                                        <span>{openSubMenu === "men" ? "-" : "+"}</span>
                                    </li>
                                    {openSubMenu === "men" && (
                                        <ul className="pl-5 text-sm">
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold">All</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold">Boots</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Brogue Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Chappals</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Chelsea Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Sandals</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Slip Ons Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Clogs</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Derby Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Juties</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Loafers</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Moccasin</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Slides Slippers</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Slippers</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Mojaris</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Monk Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Mules</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Pvc Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Safety Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2  font-normal hover:font-bold ">Slip on Sandals</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Sneakers</li>
                                        </ul>
                                    )}

                                    <li className="p-3 cursor-pointer flex justify-between"
                                        onClick={() => setOpenSubMenu(openSubMenu === "women" ? null : "women")}>
                                        WOMEN
                                        <span>{openSubMenu === "women" ? "-" : "+"}</span>
                                    </li>
                                    {openSubMenu === "women" && (
                                        <ul className="pl-5 text-sm">
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold">All</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold">Ballerinas</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Boots</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Bridal Sneakers</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Chappals</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Chelsea Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Clogs</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Derby Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Loafers</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Mujaris</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Mules</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Peep Toes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Pump Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Sandals</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Slides Slippers</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Slip ON Sandals</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">Slip Ons Shoes</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2  font-normal hover:font-bold ">Sneakers</li>
                                            <li className=" text-brand-light hover:bg-brand-light hover:text-brand-btn px-4 py-2 font-normal hover:font-bold ">W. Slippers</li>
                                        </ul>
                                    )}
                                    <li className="p-3 cursor-pointer flex justify-between"
                                        onClick={() => setOpenSubMenu(openSubMenu === "kids" ? null : "kids")}>
                                        KIDS
                                        <span>{openSubMenu === "kids" ? "-" : "+"}</span>
                                    </li>
                                    {openSubMenu === "kids" && (
                                        <ul className="pl-5 text-sm">
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">All</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Ballerinas</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Chappals</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Clogs</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Derby Shoes</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Juties</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Loafers</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Mojaris</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Sandals</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slides Slippers</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slip Ons Shoes</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slippers</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Sneakers</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Velcro Shoes</li>

                                        </ul>
                                    )}

                                    <li className="p-3 cursor-pointer flex justify-between"
                                        onClick={() => setOpenSubMenu(openSubMenu === "boys" ? null : "boys")}>
                                        BOYS
                                        <span>{openSubMenu === "boys" ? "-" : "+"}</span>
                                    </li>
                                    {openSubMenu === "boys" && (
                                        <ul className="pl-5 text-sm">
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Loafers</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Sandals</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slides Slippers</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slippers</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Sneakers</li>
                                        </ul>
                                    )}

                                    <li className="p-3 cursor-pointer flex justify-between"
                                        onClick={() => setOpenSubMenu(openSubMenu === "girls" ? null : "girls")}>
                                        GIRLS
                                        <span>{openSubMenu === "girls" ? "-" : "+"}</span>
                                    </li>
                                    {openSubMenu === "girls" && (
                                        <ul className="pl-5 text-sm">
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Ballerinas</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Clogs</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Sandals</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slides Slippers</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Slip Ons Shoes</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Sneakers</li>
                                        </ul>
                                    )}

                                    <li className="p-3 cursor-pointer flex justify-between"
                                        onClick={() => setOpenSubMenu(openSubMenu === "brands" ? null : "brands")}>
                                        BRANDS
                                        <span>{openSubMenu === "brands" ? "-" : "+"}</span>
                                    </li>
                                    {openSubMenu === "brands" && (
                                        <ul className="pl-5 text-sm">
                                            <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">All</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Lexa</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Campus</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">DA Naturo</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">DHL</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Feet 4 Ever</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">TRV Sports</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Walk Line</span>
                                        </li>

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Red Tape</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Airfax</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Unistar</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Hitcolus</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Ostero</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Neoz</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">ADDA</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Welcome</span>

                                        </li>

                                        <li className="flex flex-col ">
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Chic Soles</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Airfax</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Kids Lounge</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">OOFoarm</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">Ortho Rest</span>
                                            <span className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-1">VKC</span>

                                        </li>

                                        </ul>
                                    )}

                                    <li className="p-3 cursor-pointer flex justify-between"
                                        onClick={() => setOpenSubMenu(openSubMenu === "sale" ? null : "sale")}>
                                        SALE
                                        <span>{openSubMenu === "sale" ? "-" : "+"}</span>
                                    </li>
                                    {openSubMenu === "sale" && (
                                        <ul className="pl-5 text-sm">
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Under 599/-</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Under 999/-</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Under 1499/-</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Under 1999/-</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Pre Festival Deal</li>
                                        </ul>
                                    )}

                                    <li className="p-3 cursor-pointer flex justify-between"
                                        onClick={() => setOpenSubMenu(openSubMenu === "newarrivals" ? null : "newarrivals")}>
                                        NEW ARRIVALS
                                        <span>{openSubMenu === "newarrivals" ? "-" : "+"}</span>
                                    </li>
                                    {openSubMenu === "newarrivals" && (
                                        <ul className="pl-5 text-sm">

                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Men</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold">Women</li>
                                            <li className="py-2 text-brand-light hover:bg-brand-light hover:text-brand-btn px-3 m-2 font-normal hover:font-bold ">Kids</li>
                                        </ul>
                                    )}
                                    <li className="p-3"><img src="/assets/img/me.png" alt="me brand" className="w-9" /></li>
                                </ul>
                            </div>
                        </div>

                    )}
                </div>

                <div className="w-1/6 hidden md:flex items-center justify-center gap-5">
                    <FaFacebookF className="text-2xl text-[#1877F2] hover:opacity-80 cursor-pointer" />
                    <FaInstagram className="text-2xl text-pink-500 hover:text-purple-500 cursor-pointer" />
                    <FaWhatsapp className="text-2xl text-[#25D366] hover:opacity-80 cursor-pointer" />
                    <FaYoutube className="text-2xl text-[#FF0000] hover:opacity-80 cursor-pointer" />
                    <RiShoppingBag4Fill className="text-2xl text-brand-btn hover:text-brand-back cursor-pointer" />
                </div>
            </div >
        </>
    );
}
export default NavbarMain;