import React from 'react'
import './about.css'
import ME from '../../assets/husky.jpeg'
import { TbCertificate } from 'react-icons/tb'
import { TbBrandApple  } from 'react-icons/tb'
import { VscFileSubmodule } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <TbCertificate className='about__icon' />
              <h5>Programming Experience</h5>
              <small>4+ years</small>
            </article>
            <article className='about__card'>
              <TbBrandApple className='about__icon' />
              <h5>IT Mac Technican</h5>
              <small>2+ Years</small>
            </article>
            <article className='about__card'>
              <VscFileSubmodule className='about__icon' />
              <h5>Programming Projects</h5>
              <small>10+</small>
            </article>
          </div>
          <p>
          As a fourth-year Computer Science student at Michigan Technological University, 
          I bring a robust skill set encompassing both frontend and backend web development. 
          My tenure as a full-stack developer at Little Brother, coupled with my current position on the Michigan Tech Mac Team, 
          has fortified my proficiency and instilled adaptability in mastering new programming languages. 
          I am currently in search of entry-level job and internship opportunities commencing as early as the summer of 2024. 
          My aim is to further leverage and augment my capabilities in software or web development while contributing positively to a dynamic team environment.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About