import React from 'react'
import Reservation from '../Home/Reservation'

const ReservationDetails = () => {
  return (
    <section className='bg-[var(--color-sec)]'>
    <div className="w-full h-[400px] relative">
   <img src="./img/bg.jpg" className='w-full h-[400px] ' />
   <div className={` bg-gradient-to-b h-auto from-[hsla(10,21%,16%,0.9)] from-100%  to-[#332421b3] via-100%     w-full  absolute flex flex-col justify-center items-center text-white top-0  bottom-0 gap-6`}>
       <h1 className='text-5xl font-bold'>RESERVATION</h1>
       <h3 className='text-lg'>Home / Reservation</h3>
  </div>
  <div className='orc'></div>

   </div>
<div className="py-[5rem]">
   <Reservation/>
  </div>
</section>
  )
}

export default ReservationDetails