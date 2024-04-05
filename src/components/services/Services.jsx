import React from 'react'
import './services.css'
import {BsCheck2} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Implement MaterialUI into HabitBuilder</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Designed multiple prototype using Figma.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Implemented a UI for user deletion</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Implement dynamic navbar for NCSA's Time-Tracker</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Basic understanding of Adobe-Photoshop</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Basic understanding of Aseprite</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Skills in SCRUM and Kanban development from Agile methodologies. </p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Designed ER/UML diagrams for multiple database project.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Implemented and tested website functions through Post Man and MSSQL.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Designed and Implemented course registration and evaluation page</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Use Docker to containerized package</p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Object Oriented Programming</h3>
          </div>
          
          <ul className='service__list'>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Skills in Concurrent Programming: C/C++</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Skills in threads creation and synchronization process using Semaphore and Monitor</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Audit memory leakage analysis through Valgrind CLI</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Skills in Makefile</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Skills in data structure</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Skills in design and implementation of sorting algorithms</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Skills in performing Big Oh, Big Theta, Big Omega analysis</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon' />
              <p>Skills in perfomring recursion analysis</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
