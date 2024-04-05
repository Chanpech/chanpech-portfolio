import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram, AiFillTwitterCircle } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Chanpech</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Sevices</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Achievements</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        {/* <a href="https://www.facebook.com/nul.visak/"><BsFacebook /></a> */}
        <a href="https://www.instagram.com/chanpech.h/"><AiFillInstagram /></a>
        {/*<a href="https://twitter.com"><AiFillTwitterCircle /></a>*/}
      </div>

      <div className="footer__copyright">
        <small>&copy; Chanpech Hoeng. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer