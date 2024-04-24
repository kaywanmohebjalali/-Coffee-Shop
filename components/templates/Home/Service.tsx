import Card from '@/components/modules/Card/Card'
import React from 'react'
import { FaTruckMoving , FaMugHot, FaMedal, FaBorderAll   } from "react-icons/fa";

const Service = () => {
  return (
    <section className=' my-[6rem] flex flex-col gap-8 bg-[var(--color-sec)'>
      <div className="container text-[var(--color)] title flex flex-col justify-center items-center gap-3">

        <p className='text-2xl  tracking-widest text-[#da9f5b]'>OUR SERVICES</p>
        <h2 className='text-2xl md:text-[3rem] font-bold'>Fresh & Organic Beans</h2>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 w-full gap-12 mb-[6rem]">
        <Card src={'./img/service-1.jpg'} icon={<FaTruckMoving  size='1.4rem' color='#33211D' />} title='Fastest Door Delivery'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>

        <Card src={'./img/service-2.jpg'} icon={<FaMugHot  size='1.4rem' color='#33211D' />} title='Fresh Coffee Beans'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>

        <Card src={'./img/service-3.jpg'} icon={<FaMedal  size='1.4rem' color='#33211D' />} title='Best Quality Coffee'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>

        <Card src={'./img/service-4.jpg'} icon={<FaBorderAll  size='1.4rem' color='#33211D' />} title='Online Table Booking'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>
      </div>

      <div className="relative h-[500px] ">
        <div className=" w-full h-[12px] bg-contain z-10 absolute text-white top-[1] bg-[url('../public/img/overlay-top.png')]"></div>
       <div className="w-full ">
       <img src="./img/bg.jpg" className='w-full h-[500px] ' />
       <div className={`bg-gradient-to-b  from-[hsla(10,21%,16%,0.9)] from-100%  to-[#332421b3] via-100%     w-full h-full absolute flex flex-col justify-center items-center text-white top-0 gap-6`}>
          <h3 className='text-[#DA9F5B] text-[2rem] sm:text-7xl font-bold'>50% OFF</h3>
        <h1 className=' font-bold text-[1.5rem] sm:text-4xl'>Sunday Special Offer</h1>
        <h3 className='text-[1rem] sm:text-2xl '>Only for Sunday from 1st Jan to 30th Jan 2045</h3>
        <form action="" className='mt-3  md:w-[45%] mx-auto flex'>
          <input type="email" placeholder='Your Email' className='w-[70%] px-4 py-2 md:py-4 outline-none ring-1 focus:ring-[var(--color-bg)]'/>
          <button className='px-4 py-3 md:py-4 bg-[var(--color-bg)] w-[30%] text-black'>Sign Up</button>
        </form>
    </div>
       </div>
        <div className='orc'></div>

      </div>
    </section>
  )
}

export default Service