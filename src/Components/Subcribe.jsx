import React from 'react'
import { GrUpdate } from "react-icons/gr";

const Subcribe = () => {
    return (
        <div className="w-full bg-brand-block py-9 px-3">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
                <div className="text-center md:text-center">
                    <p className="font-playfair text-white text-3xl font-semibold">Get Updates & More</p>
                    <p className="text-white text-sm">Thoughtful thoughts to your inbox</p>
                </div>
                <div className="flex w-full md:w-auto items-center bg-white p-3 shadow-md overflow-hidden">
                    <input type="email"placeholder="Enter your email"className="px-4 py-2 w-full md:w-72 outline-none text-sm"/>
                    <button className="bg-brand-btn text-white px-6 py-2 text-sm font-semibold hover:bg-brand-back transition">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subcribe