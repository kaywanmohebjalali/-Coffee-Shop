import React, { useEffect, useRef } from 'react'
import styled from './header.module.css'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";
let [heightParent, child] = ['', ''] as any
const Header = () => {

  const ulRef = useRef(null)
  const parentRef = useRef(null)
  const childRef = useRef(null)


 function openMenuHandle(){
  let eleUl=(ulRef.current as any)?.style  
  let eleUlChilde=(ulRef.current as any) .childNodes
  let eleUlChildeArray =Array.from(eleUlChilde)
 
  if(eleUl.height=='' || eleUl.height=='0px'){
    eleUl.height='300px'
    eleUl.opacity='1'
    eleUlChildeArray.map((item:any)=>item.style.opacity='1')
    
  }else{
 
    eleUl.height='0px'
    eleUlChildeArray.map((item:any)=>item.style.opacity='0')
    
  }
 }

  function close() {
    heightParent = (parentRef.current as any).style
    child = childRef?.current;
    heightParent.height = '25px';
    child?.classList?.remove(styled.pagesChildrenActive);
    child.childNodes[0].style.display = 'none'
    child.childNodes[1].style.display = 'none'

  }

  function dropDownHandle() {
    heightParent = ((parentRef?.current as any)?.style)
    child = childRef?.current;

    console.log(child?.childNodes[0].style.display);
    let w = window.innerWidth

    if (child.childNodes[0].style.display == 'none' || child.childNodes[0].style.display == '') {

      heightParent.height = `${w < 1000 ? '80px' : '0'}`;
      child?.classList?.add(styled.pagesChildrenActive);
      child.childNodes[0].style.display = 'block'
      child.childNodes[1].style.display = 'block'


    } else {

      close()

    }

  }

  useEffect(() => {
    window?.addEventListener('resize', close)

    return ()=> window.removeEventListener('resize', close)
  }, [])


  return (
    <div className=" px-[1rem]">

      <nav className={`${styled.navStyle}  `}>
        <div className={`${styled.topBar}`}>

        <h1 className={styled.text}>COFFEE</h1>
        <div className={styled.icon} onClick={openMenuHandle}><FaBars /></div>
        </div>
        
        <ul ref={ulRef} className={`${styled.list} px-[3.5rem]`} >
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/service'>Service</Link></li>
          <li><Link href='/menu'>Menu</Link></li>


          <li ref={parentRef} className={`${styled.pages}`} onClick={dropDownHandle}>
            <div className=" flex items-center gap-1">

              <p className={`${styled.textPages} mt-[-5px] sm:mt-[0]`}>
                Pages


              </p>
              <FaAngleDown size='0.9rem' />
            </div>


            <div ref={childRef} className={`${styled.pagesChildren}`}>

              <Link className={`${styled.reservation}`} href='/reservation'>Reservation</Link>
              <Link className={styled.testimonial} href='/testimonial'>Testimonial</Link>
            </div>



          </li>
          <li className=''><Link href='/contact' >Contact</Link></li>

        </ul>
      </nav>

    </div>
  )
}

export default Header