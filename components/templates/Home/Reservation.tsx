import React from 'react'
import { FaCheck } from 'react-icons/fa6'

const Reservation = () => {
  return (
    <div className="w-full ">
    <img src="./img/bg.jpg" className='w-full h-[700px] md:h-[500px]  ' />
    <div className={` h-[700px] md:h-[500px] bg-gradient-to-b  from-[hsla(10,21%,16%,0.9)] from-100%  to-[#332421b3] via-100%  px-6 text-center sm:px-16   w-full absolute flex flex-col justify-center items-center text-white top-0 gap-6`}>
      <div className="flex flex-col gap-6">

      <h3 className='text-[#DA9F5B] text-[2rem] sm:text-5xl font-bold mt-6 sm:mt-0 w-full'>30% OFF</h3>
      <h1 className=' font-bold text-[1.2rem] sm:text-3xl w-full'>For Online Reservation</h1>
      <h3 className='text-[1rem]  '>Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea Lorem</h3>
      <ul className='text-xl space-y-3 '>
    <li  className='flex items-center gap-3 justify-center text-[1rem] md:text-xl'> <FaCheck color='#da9f5b'/> Lorem ipsum dolor sit amet</li>
    <li  className='flex items-center gap-3 justify-center   text-[1rem] md:text-xl'> <FaCheck color='#da9f5b'/> Lorem ipsum dolor sit amet</li>
    <li  className='flex items-center gap-3 justify-center   text-[1rem] md:text-xl'> <FaCheck color='#da9f5b'/> Lorem ipsum dolor sit amet</li>
  </ul>
      </div>
     

    </div>
    

  <form action="" className='w-full flex flex-col text-center gap-6 z-[5000] p-10 px-6 md:px-16  text-[#555555]'>
        <h1 className='text-2xl text-white'>Book Your Table</h1>
        <input type="text" placeholder='Name' className='p-3 bg-[var(--color)] border-[1px] border-[var(--color-bg)]' />
        <input type="email" placeholder='Email' className=' p-3 bg-[var(--color)] border-[1px] border-[var(--color-bg)]' />
        <input type="date" placeholder='Date' className='p-3 bg-[var(--color)] border-[1px] border-[var(--color-bg)]' />
        <input type="time" placeholder='Time' className=' p-3 bg-[var(--color)] border-[1px] border-[var(--color-bg)]' />
        <input type="text" placeholder='Person' className='p-3 bg-[var(--color)] border-[1px] border-[var(--color-bg)]' />
        <button className='text-black w-full bg-[var(--color-bg)] p-2 text-xl'>Book Now</button>
      </form>
  </div>

  )
}

export default Reservation