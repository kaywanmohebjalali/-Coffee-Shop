import React from 'react'
interface typeProps{
src:string,
title:string,
children:string,
price:string,
color:string
}
const MenuCard = ({src, title, children, price, color}:typeProps) => {
  return (
    <div className={` flex  items-center gap-6 text-[${color}]`}>
      <div className="relative rounded-full  w-full md:w-[60%] md:min-w-[150px] max-w-[150px] md:h-[150px] ">
        <img src={src} alt=""  className=' rounded-full  w-full md:w-[60%] md:min-w-[150px] max-w-[150px] md:h-[150px] '/>
        <span className='absolute top-0 right-0 z-[2000000] rounded-full p-1 md:p-2 px-[0.4rem] md:px-[0.6rem] text-md md:text-xl bg-[var(--color-bg)] font-bold'>{price}</span>
      </div>

      <div className=" space-y-2">
        <h2 className='text-xl md:text-2xl font-bold'>{title}</h2>
        <h2 className=''>{children}</h2>
      </div>
    </div>
  )
}

export default MenuCard