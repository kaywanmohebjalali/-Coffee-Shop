import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <section className="">

      <div className="relative h-[1040px] md:h-[630px]">
        <div className=" w-full h-[12px] bg-contain z-10 absolute text-white top-[1] bg-[url('../public/img/overlay-top.png')]"></div>
        <div className="w-full ">
          <img src="./img/bg.jpg" className='w-full  h-[1040px] md:h-[630px]' />
          <div className={`pt-16 bg-gradient-to-b  from-[hsla(10,21%,16%,0.9)] from-100%  to-[#332421b3] via-100%     w-full h-full absolute text-white top-0 bottom-0`}>
               <div className="">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        
            <div className="px-4 md:px-8 top-left space-y-3 text-lg">
              <h1 className='text-2xl font-bold'>GET IN TOUCH</h1>
              <h3 className='flex items-center gap-1'><FaMapMarkerAlt/> 123 Street, New York, USA </h3>
              <h3 className='flex items-center gap-1'><FaPhoneAlt /> +012 345 67890 </h3>
              <h3 className='flex items-center gap-2'><FaEnvelope /> info@example.com</h3>
            </div>

            <div className="px-4 md:px-8 top-right space-y-3  text-lg">
              <h1 className='text-2xl font-bold'>FOLLOW US</h1>
              <h3>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</h3>
              <div className="flex gap-2">
                <div className="border-[1px] p-3"><FaTwitter size='1.4rem'/></div>
                <div className="border-[1px] p-3"><FaFacebookF  size='1.4rem'/></div>
                <div className="border-[1px] p-3"><FaLinkedinIn  size='1.4rem'/></div>
                <div className="border-[1px] p-3"><FaInstagram  size='1.4rem'/></div>
              </div>
            </div>


            <div className="px-4 md:px-8 bottom-left space-y-3  text-lg">
              <h1 className='text-2xl font-bold'>OPEN HOURS</h1>
              <div className="">
                <p>MONDAY - FRIDAY</p>
                <p>8.00 AM - 8.00 PM</p>
              </div>

              <div className="">
                <p>SATURDAY - SUNDAY</p>
                <p>2.00 PM - 8.00 PM</p>
              </div>

            </div>

            <div className="px-4 md:px-8 bottom-right space-y-3  text-lg">
              <h1 className='text-2xl font-bold'>NEWSLETTER</h1>
              <h3>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</h3>
              <form action="" className='mt-3 w-full mx-auto flex'>
                <input type="email" placeholder='Your Email' className='w-[70%] px-4  outline-none ring-1 focus:ring-[var(--color-bg)] text-black' />
                <button className='px-1 py-2 md:py-2 bg-[var(--color-bg)] w-[30%] text-black bg-[#da9f5b] cursor-pointer hover:bg-[#D38D3C]  transition    ease-in-out duration-300'>Sign Up</button>
              </form>
            </div>
              
            </div>

            <div className="bottom w-full mt-6 border-t-[1px] border-[#555] text-center text-sm md:text-lg flex flex-col gap-2 px-4">
               <div className="mt-6">
               Copyright © <Link href="/" className='text-[var(--color-bg)]'>Domain</Link>. All Rights Reserved.
               </div>

               <div className="">
               Designed by <Link href="/" className='text-[var(--color-bg)]'>HTML Codex</Link>
               </div>
               
            </div>

          </div>
        </div>


        </div>
      </div>


    </section>
  )
}

export default Footer