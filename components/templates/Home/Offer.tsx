import React from 'react'

const Offer = () => {
  return (
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
      <button className='px-4 py-3 md:py-4 bg-[var(--color-bg)] w-[30%] text-black  bg-[#da9f5b] cursor-pointer hover:bg-[#D38D3C]  transition    ease-in-out duration-300'>Sign Up</button>
    </form>
</div>
   </div>
    <div className='orc'></div>

  </div>
  )
}

export default Offer