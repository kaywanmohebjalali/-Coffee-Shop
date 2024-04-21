import React from 'react'

const About = () => {
  return (
    <section className='bg-[#FFFBF2] py-[2rem] flex flex-col gap-12'>
      <div className="title flex flex-col justify-center items-center gap-3">

      <p className='text-2xl  tracking-widest text-[#da9f5b] '>ABOUT US</p>
      <h2 className='text-5xl font-bold'>Serving Since 1950</h2>
      </div>

      <div className=" flex flex-col gap-4 p-8  z-[20] bg-[#FFFBF2]">
        <h3 className='text-3xl font-bold'>Our Story</h3>
        <p className='text-xl'>Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea</p>
        <p className='text-lg text-[#9c9c9c]'>Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. Est nonumy sed labore eirmod sit magna. Erat at est justo sit ut. Labor diam sed ipsum et eirmod</p>
        <button className=' bg-[#33211d] cursor-pointer hover:bg-[#1b110f] text-white self-start py-2 px-6 font-bold text-[1.1rem]'>Learn More</button>
      </div>

      <div className="h-[80vh] w-full flex justify-center  ">
        <img src="/img/about.png" alt=""  className='h-[150vh] absolute mt-[-200px]' />
      </div>
    </section>
  )
}

export default About