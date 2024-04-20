

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from '../styles/slider.module.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import About from '../components/templates/Home/About';


export default function Home() {


  return (
    <>
      <div className="text-red-500 w-full relative">

      <Swiper

      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      navigation
      
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className={`${styled.tran}`}
    >
      <SwiperSlide className={`${styled.tran} h-full relative`}>
    <div className={`${styled.text} w-full h-full absolute flex flex-col justify-center items-center text-white`}>
          <h3 className='text-[#DA9F5B] text-xl md:text-3xl font-bold'>We Have Been Serving</h3>
        <h1 className='text-[4.5rem] md:text-[7rem] font-bold my-[-1rem]'>COFFEE</h1>
        <h3 className='text-xl md:text-3xl font-bold'>*SINCE 1950*</h3>
    </div>
        <img className='w-[100%] h-[60vh]' src="./img/carousel-1.jpg" alt="" />
        </SwiperSlide>
      <SwiperSlide className={`${styled.tran} h-full `}>
      <div className={`${styled.text} w-full h-full absolute flex flex-col justify-center items-center text-white`}>
          <h3 className='text-[#DA9F5B] text-3xl font-bold'>We Have Been Serving</h3>
        <h1 className='text-[7rem] font-bold my-[-1rem]'>COFFEE</h1>
        <h3 className='text-3xl font-bold'>*SINCE 1950*</h3>
    </div>
        <img className='w-[100%] h-[60vh]' src="./img/carousel-2.jpg" alt="" />
        </SwiperSlide>
     
      
    </Swiper>

    
  
      
      <div className={`${styled.orc}`}></div>



      </div>
      <About/>
    </>
  );
}
