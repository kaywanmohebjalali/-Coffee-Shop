import React, { ReactNode } from 'react'
type propType = {
  src: string,
  icon?: ReactNode,
  title:String,
  children:String
};
const Card = ({src, icon='', title, children}:propType) => {
  return (
    <section className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-[#33211D] '>
      <img className=' md:w-[38%] h-auto' src={src} alt="" />

      <div className="">

        <div className="flex items-center gap-3 mb-2 justify-center">
          {icon &&<div className="bg-[#da9f5b] rounded-full p-2 md:p-3">{icon}</div>}
          <h1 className='text-xl md:text-2xl font-bold text-center'>{title}</h1>
        </div>

       <div className="text-center"> {children}</div>
      </div>

    </section>
  )
}

export default Card