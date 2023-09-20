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
    review: 'Joined with to connects with others interested in systems, network, security, and software engineering.',
  },
  {
    avatar: AVTR2,
    name: 'Society of Asian Scientists and Engineers (SASE)',
    review: 'To connects and creates meaningful experience with other student that share the same Asian Pacific background.',
  },
  {
    avatar: AVTR3,
    name: 'Human Interface Design Enterprise(HIDE)',
    review: 'Invovled in the Little Brother - Friends of the elderly team.',
  }
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