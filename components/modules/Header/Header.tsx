import React from 'react'
import styled from './header.module.scss'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="container my-8 ">

      <nav className=''>
      <h1 className={styled.text}>COFFEE</h1>
        <ul className={styled.list}>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/service'>Service</Link></li>
          <li><Link href='/menu'>Menu</Link></li>
          <li className=''><Link href='/contact' >Contact</Link></li>
          
            <li className={`${styled.pages}`}>
              <div className=" flex items-center gap-1">

              <p className={`${styled.textPages} mt-[-5px]`}>
                Pages
                

                </p>
            <FaAngleDown size='0.9rem'/>
              </div>


              <div className={styled.pagesChildren}>

              <Link className={styled.reservation} href='/reservation'>Reservation</Link>
              <Link className={styled.testimonial} href='/testimonial'>Testimonial</Link>
              </div>
                

            </li>
          
        </ul>
      </nav>

    </div>
  )
}

export default Header