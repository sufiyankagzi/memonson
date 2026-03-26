import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { GiSonicShoes } from "react-icons/gi";
import React from 'react'
import Copyright from '../Components/Copyright';
import { useState } from "react";

const Footer = () => {

  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };
  const Section = ({ title, items, id, open, toggle }) => (
    <div>
      {/* Heading */}
      <div
        onClick={() => toggle(id)}
        className="flex justify-between items-center cursor-pointer md:cursor-default"
      >
        <p className="font-playfair text-xl border-b border-white/20 inline-block pb-1">
          {title}
        </p>
        <span className="md:hidden">{open === id ? "-" : "+"}</span>
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-2 text-sm mt-3 overflow-hidden transition-all duration-300 
      ${open === id ? "max-h-40" : "max-h-0 md:max-h-full"}`}>

        {items.map((item, i) => (
          <p key={i} className="hover:text-brand-block hover:translate-x-1 transition-all cursor-pointer">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
  return (
    <>
      <div className="w-full bg-brand-back text-white">

        {/* Glass effect container */}
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          <Section
            title="Shop"
            id="shop"
            open={open}
            toggle={toggle}
            items={["Men", "Women", "Kids", "Brands", "Sale", "New Arrivals"]}
          />

          <Section
            title="Company"
            id="company"
            open={open}
            toggle={toggle}
            items={["About", "Store Locator", "Contact Us"]}
          />

          <Section
            title="More Info"
            id="info"
            open={open}
            toggle={toggle}
            items={["Terms & Conditions", "Privacy Policy", "Returns & Exchange Policy", "Blogs"]}
          />

          {/* Social + Newsletter */}
          <div>
            <p className="font-playfair text-xl border-b border-white/20 inline-block pb-1 mb-4">
              Stay Connected
            </p>

            {/* Input */}
            <div className="flex mb-4 bg-white/20 rounded overflow-hidden">
              <input
                placeholder="Your email"
                className="w-full px-3 py-2 bg-transparent outline-none text-sm text-brand-light"
              />
              <button className="bg-brand-block text-black text-sm font-bold font-roboto px-4 transition">
                Join
              </button>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <div className="w-11 h-11 flex items-center justify-center bg-white/10 rounded hover:bg-blue-600 transition cursor-pointer"><FaFacebookF /></div>
              <div className="w-11 h-11 flex items-center justify-center bg-white/10 rounded hover:bg-pink-500 transition cursor-pointer"><FaInstagram /></div>
              <div className="w-11 h-11 flex items-center justify-center bg-white/10 rounded hover:bg-green-500 transition cursor-pointer"><FaWhatsapp /></div>
              <div className="w-11 h-11 flex items-center justify-center bg-white/10 rounded hover:bg-red-500 transition cursor-pointer"><FaYoutube /></div>
            </div>
          </div>

        </div>


      </div>
      <div className="w-full bg-black  font-roboto flex flex-col md:flex-row justify-between">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center  gap-2 px-4 py-3 text-center md:text-left">
          <h4 className='py-2 text-sm text-brand-light hover:text-brand-block cursor-pointer'>Follow Us On</h4>
          <div className="flex flex-row gap-2 py-2">
            <FaFacebookF className="text-2xl cursor-pointer w-10 h-10 rounded-md text-brand-light hover:text-[#1877F2] hover:opacity-80 p-1" />
            <FaInstagram className="text-2xl cursor-pointer w-10 h-10 rounded-md text-brand-light hover:text-pink-500 hover:opacity-80 p-1" />
            <FaWhatsapp className="text-2xl cursor-pointer w-10 h-10 rounded-md text-brand-light hover:text-[#0aa242] hover:opacity-80 p-1" />
            <FaYoutube className="text-2xl cursor-pointer w-10 h-10 rounded-md text-brand-light hover:text-[#FF0000] hover:opacity-80 p-1" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col  md:flex-row items-center justify-between gap-5 px-4 py-3 text-center md:text-left">
          <h4 className='py-0.5 text-sm text-brand-light hover:text-brand-block cursor-pointer'>We Accept</h4>
          <div className="flex flex-row gap-8 py-2">
            <img src="/assets/img/GPay.png" className="w-[60px]" alt="G Pay" />
            <img src="/assets/img/Upi.png" className="w-[60px]" alt="Upi" />
          </div>
        </div>
      </div>
      
      <Copyright />
    </>
  )
}

export default Footer;