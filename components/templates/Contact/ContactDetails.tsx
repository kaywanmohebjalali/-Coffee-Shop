import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ContactDetails = () => {
  return (
    <section className=' bg-[#FFFBF2]  text-[var(--color)] w-full'>
    

    <div className="w-full h-[400px] relative">
   <img src="./img/bg.jpg" className='w-full h-[400px] ' />
   <div className={` bg-gradient-to-b h-auto from-[hsla(10,21%,16%,0.9)] from-100%  to-[#332421b3] via-100%     w-full  absolute flex flex-col justify-center items-center text-white top-0  bottom-0 gap-6`}>
       <h1 className='text-5xl font-bold'>CONTACT</h1>
       <h3 className='text-lg'>Home / Contact</h3>
  </div>
  
   <div className='orc'></div>
   </div>


   <div className="container pt-[6rem]">

    <div className="title flex flex-col justify-center items-center gap-3">

    <p className='text-2xl  tracking-widest text-[#da9f5b] '>CONTACT US</p>
    <h2 className='text-2xl md:text-[3rem] font-bold '>Feel Free To Contact</h2>
    </div>
    <div className="icons flex flex-col md:flex-row gap-10 md:gap-0 justify-between  py-16 max-w-[800px] mx-auto">

      <div className="icon flex flex-col items-center gap-3">
      <FaMapMarkerAlt size="2rem" className='text-[var(--color-bg)]'/> 
        <h2 className='text-2xl font-bold'>Address</h2>
        <h2>123 Street, New York, USA</h2>
      </div>

      <div className="icon flex flex-col items-center gap-3">
      <FaPhoneAlt  size="2rem" className='text-[var(--color-bg)]'/> 
        <h2 className='text-2xl font-bold'>Phone</h2>
        <h2>+012 345 6789</h2>
      </div>

      <div className="icon flex flex-col items-center gap-3">
      <FaEnvelope size="2rem" className='text-[var(--color-bg)]'/> 
        <h2 className='text-2xl font-bold'>Email</h2>
        <h2>info@example.com</h2>
      </div>
    </div>

  
     <div className="flex flex-col md:flex-row pb-[6rem] gap-6">


      <form action="" className='flex flex-col gap-6 md:w-1/2'>
            <input className='w-full outline-none border-[1px] border-[#bebbbb] focus:border-[rgba(255,178,115,0.5)] p-3 ring-4 ring-transparent focus:ring-[rgba(255,178,115,0.5)] transition    ease-in-out duration-200' type="text" placeholder='Your Name' />
            <input className='w-full outline-none border-[1px] border-[#bebbbb] focus:border-[rgba(255,178,115,0.5)] p-3 ring-4 ring-transparent focus:ring-[rgba(255,178,115,0.5)] transition    ease-in-out duration-200' type="email" placeholder='Your Email' />
            <input className='w-full outline-none border-[1px] border-[#bebbbb] focus:border-[rgba(255,178,115,0.5)] p-3 ring-4 ring-transparent focus:ring-[rgba(255,178,115,0.5)] transition    ease-in-out duration-200' type="text" placeholder='YSubject' />
            <textarea rows={6} className='w-full outline-none border-[1px] border-[#bebbbb] focus:border-[rgba(255,178,115,0.5)] p-3 ring-4 ring-transparent focus:ring-[rgba(255,178,115,0.5)] transition    ease-in-out duration-200' placeholder='Message' />
            <button className='font-bold px-4 py-3 md:py-4 bg-[var(--color-bg)] w-[60%] text-black  bg-[#da9f5b] cursor-pointer hover:bg-[#D38D3C]  transition    ease-in-out duration-300'>Send Message</button>

      </form>
     </div>
   </div>



    </section>

  )
}

export default ContactDetails