import React from 'react'
import './about.css'
import ME from '../../assets/husky.jpeg'
import { TbCertificate } from 'react-icons/tb'
import { TbBrandApple } from 'react-icons/tb'
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
            As a recent Computer Science graduate from Michigan Technological University, I have honed a versatile skill set in both frontend and backend development,
            underpinned by a strong academic background with a GPA of 3.71 and a departmental GPA of 3.55. My experience as a full-stack developer for Little Brother - Friends of the Elderly, and my role in the Michigan Tech Mac Team,
            have sharpened my abilities in C/C++, system programming, React, Next.js, Vite, and Docker. Proficient in object-oriented programming,
            data structures, concurrent programming, and experienced with version control systems like Git, GitHub, GitLab, and BitBucket,
            I am adept at navigating the complexities of software development. Additionally, my familiarity with AWS supports my capability to work in diverse development environments.
            Eager to start my professional journey, I am seeking entry-level positions or internships in software or web development starting from the summer of 2024, where I can contribute to and grow with a dynamic team.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About