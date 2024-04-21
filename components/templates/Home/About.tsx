import React from 'react'
import { FaCheck } from "react-icons/fa";

const About = () => {
  return (
    <section className='bg-[#FFFBF2] py-[6rem] flex flex-col gap-12'>
      <div className="title flex flex-col justify-center items-center gap-3">

      <p className='text-2xl  tracking-widest text-[#da9f5b] '>ABOUT US</p>
      <h2 className='text-[2.5rem] font-bold'>Serving Since 1950</h2>
      </div>

      <div className=" flex flex-col gap-6 p-8  z-[20] bg-[#FFFBF2]">
        <h3 className='text-3xl font-bold'>Our Story</h3>
        <p className='text-xl'>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</p>
        <p className='text-lg text-[#9c9c9c]'>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
        <button className=' bg-[#33211d] cursor-pointer hover:bg-[#1b110f] text-white self-start py-2 px-6 font-bold text-[1.1rem] transition    ease-in-out duration-300'>Learn More</button>
      </div>

      <div className=" w-full flex justify-center h-[50vh] ">
        <img src="/img/about.png" alt=""  className='h-[70vh] absolute mt-[-200px]' />
      </div>


      <div className=" flex flex-col gap-6 px-8  z-[20] bg-[#FFFBF2]">
        <h3 className='text-4xl font-bold'>Our Vision</h3>
        <p className='text-lg text-[#9c9c9c]'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
        <ul className='text-xl'>
          <li  className='flex items-center gap-3'> <FaCheck color='#da9f5b'/> Lorem ipsum dolor sit amet</li>
          <li  className='flex items-center gap-3'> <FaCheck color='#da9f5b'/> Lorem ipsum dolor sit amet</li>
          <li  className='flex items-center gap-3'> <FaCheck color='#da9f5b'/> Lorem ipsum dolor sit amet</li>
        </ul>
        <button className='text-[#2f3438] bg-[#da9f5b] cursor-pointer hover:bg-[#D38D3C] self-start py-2 px-6 font-bold text-[1.1rem] transition    ease-in-out duration-300'>Learn More</button>
      </div>

    </section>
  )
}

export default About