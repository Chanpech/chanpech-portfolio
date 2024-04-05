import React from 'react'
import './involvement.css'
import AVTR1 from '../../assets/NCSA.png'
import AVTR2 from '../../assets/hide-logo.png'
import AVTR3 from '../../assets/SASE.webp'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Networking and Computing Student Association (NCSA)',
    review: 'Dev team is responsible for incubating application-level solutions for NCSA and it\'s customers. These projects often involve software development, software maintenance, application integration, testing, and the wider field of dev-ops.',
  },
  {
    avatar: AVTR3,
    name: 'Society of Asian Scientists and Engineers (SASE)',
    review: 'To connects and creates meaningful experience with other student that share the same Asian Pacific background.',
  },
  {
    avatar: AVTR2,
    name: 'Human Interface Design Enterprise(HIDE)',
    review: 'Proud full-stack developer of Little Brother - Friends of the elderly team and co-lead GM Car Comparison App.',
  },
]

const Involvement = () => {
  return (
    <section id='testimonials'>
      <h5>Outside of class</h5>
      <h2>Involvements</h2>
      <Swiper className="container testimonials__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
     >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
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

export default Involvement