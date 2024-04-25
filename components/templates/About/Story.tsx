import React from 'react'
import About from '../Home/About'

const Story = () => {
  return (
    <section className='bg-[var(--color-sec)] pb-[6rem]'>
    <div className="w-full h-[400px] relative">
   <img src="./img/bg.jpg" className='w-full h-[400px] ' />
   <div className={` bg-gradient-to-b h-auto from-[hsla(10,21%,16%,0.9)] from-100%  to-[#332421b3] via-100%     w-full  absolute flex flex-col justify-center items-center text-white top-0  bottom-0 gap-6`}>
       <h1 className='text-5xl font-bold'>ABOUT US</h1>
       <h3 className='text-lg'>Home / About Us</h3>
  </div>
   </div>
 <About/>
</section>
  )
}

export default Story