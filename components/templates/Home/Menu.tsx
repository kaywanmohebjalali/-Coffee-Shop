import MenuCard from '@/components/modules/MenuCard/MenuCard'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import Reservation from './Reservation'

const Menu = () => {
  return (
    <section className='container my-[6rem] flex flex-col gap-8 bg-[var(--color-sec)]'>
      <div className=" text-[var(--color)] title flex flex-col  justify-center items-center gap-3">

        <p className='text-2xl  tracking-widest text-[#da9f5b]'>MENU & PRICING</p>
        <h2 className='text-3xl md:text-[3rem] font-bold'>Competitive Pricing</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-10">
          <h3 className='text-4xl w-full text-start font-bold my-10'>Hot Coffee</h3>

          <MenuCard src='/img/menu-1.jpg' title='Black Coffee' price='$5' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
          <MenuCard src='/img/menu-2.jpg' title='Cochleae Coffee' price='$7' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
          <MenuCard src='/img/menu-3.jpg' title='Coffee With Milk' price='$9' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
        </div>

        <div className="flex flex-col gap-10">
          <h3 className='text-4xl w-full text-start font-bold my-10'>Cold Coffee</h3>

          <MenuCard src='/img/menu-1.jpg' title='Black Coffee' price='$5' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
          <MenuCard src='/img/menu-2.jpg' title='Cochleae Coffee' price='$7' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
          <MenuCard src='/img/menu-3.jpg' title='Coffee With Milk' price='$9' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
        </div>
      </div>

      <div className="relative  mt-12 bg-[var(--color)] mx-auto w-full ">
        <div className=" w-full h-[8px] bg-contain z-[50000000]  absolute text-white top-[-1px] bg-[url('../public/img/overlay-top.png')]"></div>
      
      
        <Reservation/>

        <div className='orc '></div>
      </div>
    </section>
  )
}

export default Menu