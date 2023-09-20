import React from 'react'
import {BsLinkedin, BsGithub, BsDribbble} from 'react-icons/bs'
import {SiHandshake} from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/chanpech-hoeng-2b7a351b5/" target="_blank"> <BsLinkedin/> </a>
        <a href="https://github.com/Chanpech" target="_blank"> <BsGithub /> </a>
        <a href="https://mtu.joinhandshake.com/stu/users/23522064" target="_blank"> <SiHandshake /> </a>
    </div>
  )
}

export default HeaderSocial
