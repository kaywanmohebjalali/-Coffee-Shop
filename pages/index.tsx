

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '../styles/slider.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function Home() {


  return (
    <>
      <div className="text-red-500">

      <Swiper

      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className=''
    >
      <SwiperSlide className='h-full'>
    <div className={`${styled.text} w-full h-full absolute flex flex-col justify-center items-center text-white`}>
          <h3 className='text-[#DA9F5B] text-3xl font-bold'>We Have Been Serving</h3>
        <h1 className='text-[7rem] font-bold my-[-1rem]'>COFFEE</h1>
        <h3 className='text-3xl font-bold'>*SINCE 1950*</h3>
    </div>
        <img className='w-[100%] h-[60vh]' src="./img/carousel-1.jpg" alt="" />
        </SwiperSlide>
      <SwiperSlide className='h-full' >
      <div className={`${styled.text} w-full h-full absolute flex flex-col justify-center items-center text-white`}>
          <h3 className='text-[#DA9F5B] text-3xl font-bold'>We Have Been Serving</h3>
        <h1 className='text-[7rem] font-bold my-[-1rem]'>COFFEE</h1>
        <h3 className='text-3xl font-bold'>*SINCE 1950*</h3>
    </div>
        <img className='w-[100%] h-[60vh]' src="./img/carousel-2.jpg" alt="" />
        </SwiperSlide>
     
      
    </Swiper>

    
  
      
      <div className={`${styled.orc}`}>
      
      </div>



      </div>
    </>
  );
}
