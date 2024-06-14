import React from 'react'
import './technicalCourses.css'
import AVTR1 from '../../assets/circuit (1).png'
import AVTR2 from '../../assets/circuit.png'
import AVTR3 from '../../assets/database.png'
import AVTR4 from '../../assets/file-case.png'
import AVTR5 from '../../assets/group.png'
import AVTR6 from '../../assets/hierarchical-structure.png'
import AVTR7 from '../../assets/icons8-resistor-64.png'
import AVTR8 from '../../assets/logic-gates.png'
import AVTR9 from '../../assets/neural.png'
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR3,
    name: 'CS3425: Databases',
    review: 'Introduced to the database design, mysql query, and web development programming.',
  },
  {
    avatar: AVTR6,
    name: 'CS2321: Data Structures',
    review: 'Learned about the fundamental concepts of abstract data types and their impelementation through kava objected oriented programming.',
  },
  {
    avatar: AVTR1,
    name: 'CS1142: Programming at HW/SW Interface',
    review: 'Programmed in MIPS assembly lanaguage and C. Programmed includes preprocessor, input/output, dynamic memory management, and pointers.',
  },
  {
    avatar: AVTR9,
    name: 'CS2311: Discrete Structure',
    review: 'Learned and practice sets, trees, graphs, functions, relations, recurrences, proof techniques, logic, combinatorics, and probability.',
  },
  {
    avatar: AVTR4,
    name: 'CS3000: Ethical & Social Aspects of Comp.',
    review: 'Examed social and ethical issues assoicated with computing basing off of fundamental concepts such as ethical theories and decision making.',
  },
  {
    avatar: AVTR9,
    name: 'CS3311: Formal Models of Computation',
    review: 'Learned and applied regular lanagues and finite automata, context-free langauges and push-down automata, Turing-acceptable languages, Turing machines, and the halting problem.',
  },
  {
    avatar: AVTR5,
    name: 'CS3141: Team Software Project',
    review: 'Introduced and applied the practices of SCRUM methodology in a team focused project. Topics include UML, design specification, requirement, unit testing, documentation, and security.',
  },
  {
    avatar: AVTR8,
    name: 'CS3421: Computer Organization',
    review: 'Introduced and applied the fundamental concepts of logic design, information storage and manipulation, control, and input/output. The course also explored hardware technology, virtual memory, and introduction to pipelining.',
  },
  {
    avatar: AVTR7,
    name: 'EE3010: Circuits and Instrumentation',
    review: 'Introduced and applied the principles of electrical and electronic measurements such as DC, AC, Semiconductor devices, amplifiers, and filtering in a hands on lab.',
  }
]

const TechnicalCourses = () => {
  return (
    <section id='TechnicalCourses'>
      <h5>Completed courses at Michigan Technological University</h5>
      <h2>Achievements</h2>
      <Swiper className="container TechnicalCourses__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
     >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="course">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default TechnicalCourses