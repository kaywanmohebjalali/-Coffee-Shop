import Card from '@/components/modules/Card/Card'
import React from 'react'
import { FaTruckMoving , FaMugHot, FaMedal, FaBorderAll   } from "react-icons/fa";
import Offer from './Offer';

const Service = () => {
  return (
    <section className=' my-[6rem] flex flex-col gap-8 bg-[var(--color-sec)'>
      <div className="container text-[var(--color)] title flex flex-col justify-center items-center gap-3">

        <p className='text-2xl  tracking-widest text-[#da9f5b]'>OUR SERVICES</p>
        <h2 className='text-2xl md:text-[3rem] font-bold mb-8'>Fresh & Organic Beans</h2>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 w-full gap-12 mb-[6rem]">
        <Card src={'./img/service-1.jpg'} icon={<FaTruckMoving  size='1.4rem' color='#33211D' />} title='Fastest Door Delivery'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>

        <Card src={'./img/service-2.jpg'} icon={<FaMugHot  size='1.4rem' color='#33211D' />} title='Fresh Coffee Beans'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>

        <Card src={'./img/service-3.jpg'} icon={<FaMedal  size='1.4rem' color='#33211D' />} title='Best Quality Coffee'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>

        <Card src={'./img/service-4.jpg'} icon={<FaBorderAll  size='1.4rem' color='#33211D' />} title='Online Table Booking'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>
      </div>
   

    </section>
  )
}

export default Service