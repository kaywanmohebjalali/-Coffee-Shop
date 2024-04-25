import MenuCard from '@/components/modules/MenuCard/MenuCard'
import React from 'react'


const Menu = () => {
  return (
    <section className='container my-[6rem] flex flex-col gap-8 bg-[var(--color-sec)]'>
      <div className=" text-[var(--color)] title flex flex-col  justify-center items-center gap-3">

        <p className='text-2xl  tracking-widest text-[#da9f5b]'>MENU & PRICING</p>
        <h2 className='text-3xl md:text-[3rem] font-bold'>Competitive Pricing</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-10 ">
          <h3 className='text-4xl w-full text-start font-bold my-10 xl:text-center'>Hot Coffee</h3>

          <MenuCard src='/img/menu-1.jpg' title='Black Coffee' price='$5' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
          <MenuCard src='/img/menu-2.jpg' title='Cochleae Coffee' price='$7' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
          <MenuCard src='/img/menu-3.jpg' title='Coffee With Milk' price='$9' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
        </div>

        <div className="flex flex-col gap-10">
          <h3 className='text-4xl w-full text-start font-bold my-10 xl:text-center'>Cold Coffee</h3>

          <MenuCard src='/img/menu-1.jpg' title='Black Coffee' price='$5' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
          <MenuCard src='/img/menu-2.jpg' title='Cochleae Coffee' price='$7' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
          <MenuCard src='/img/menu-3.jpg' title='Coffee With Milk' price='$9' color='#33211D'>Sit lorem ipsum et diam elitr est dolor sed duo guberg sea et et lorem dolor </MenuCard>
        </div>
      </div>


    </section>
  )
}

export default Menu