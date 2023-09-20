import React from 'react'
import './about.css'
import ME from '../../assets/PostImage.jpg'
import { TbCertificate } from 'react-icons/tb'
import { FiGithub } from 'react-icons/fi'
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
              <FiGithub className='about__icon' />
              <h5>GitHub</h5>
              <small>66+ contributions</small>
            </article>
            <article className='about__card'>
              <VscFileSubmodule className='about__icon' />
              <h5>Programming Projects</h5>
              <small>7+</small>
            </article>
          </div>
          <p>
          As a third-year Computer Science major 
          with a minor in Cyber Security, I possess 
          valuable skills in both frontend and backend web development. 
          My previous experience as a full-stack developer for Little Brother, 
          along with my current role on the Michigan Tech Mac Team, 
          has further honed my abilities and taught me to be adaptable to new programming languages. I am now eagerly seeking a 2023 summer internship opportunity in software or web development,
          where I can continue to apply and expand my skills.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About