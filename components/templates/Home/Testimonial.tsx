import Card from '@/components/modules/Card/Card'
import React from 'react'

const Testimonial = () => {
  return (
    <section className='container my-[6rem] flex flex-col gap-20'>
    <div className=" text-[var(--color)] title flex flex-col justify-center items-center gap-3">

      <p className='text-2xl  tracking-widest text-[#da9f5b]'>TESTIMONIAL</p>
      <h2 className='text-3xl md:text-[3rem] font-bold'>Our Clients Say</h2>
    </div>
    <div className=" grid grid-cols-1 lg:grid-cols-2 w-full gap-12 mb-[6rem]">
        <Card src={'./img/testimonial-1.jpg'}    title='Fastest Door Delivery'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>

        <Card src={'./img/testimonial-2.jpg'} title='Fresh Coffee Beans'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>

        <Card src={'./img/testimonial-3.jpg'}  title='Best Quality Coffee'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>

        <Card src={'./img/testimonial-4.jpg'}  title='Online Table Booking'>
        Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor
        </Card>
      </div>

    </section>
  )
}

export default Testimonial