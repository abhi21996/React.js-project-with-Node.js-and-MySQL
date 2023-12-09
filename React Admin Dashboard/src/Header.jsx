import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsArrowLeftSquare}
 from 'react-icons/bs'
 import { useNavigate } from 'react-router-dom';
 import { Link } from 'react-router-dom';


function Header({OpenSidebar}) {

  return (
    <header className='header' style={{backgroundColor:"#2a3341"}}>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left' style={{color:"white !important"}}>
        <span></span>
        </div>
        <div className='header-right' style={{color:"white"}}>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header