import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ProfileVer2.png'
import HeaderSocial from './HeaderSocial'

//The style of naming classes is called  bim
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Chanpech Hoeng</h1>
        <h2 className="text-light"> Fullstack Developer</h2>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={ME} alt="" />
        </div>
        <a href="#contact" className='scroll__down'> Scroll Down</a>
      </div>
    
    </header>
  )
}

export default Header
