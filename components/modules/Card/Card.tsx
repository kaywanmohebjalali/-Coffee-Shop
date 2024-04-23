import React, { ReactNode } from 'react'
type propType = {
  src: string,
  icon: ReactNode,
  title:String,
  children:String
};
const Card = (prop:propType) => {
  return (
    <section className='flex items-center justify-between gap-6 text-[#33211D] '>
      <img className='w-[38%] h-auto' src={prop.src} alt="" />

      <div className="">

        <div className="flex items-center gap-3 mb-2">
          <div className="bg-[#da9f5b] rounded-full p-3">{prop.icon}</div>
          <h1 className='text-2xl font-bold'>{prop.title}</h1>
        </div>

        {prop.children}
      </div>

    </section>
  )
}

export default Card