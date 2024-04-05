import React from 'react'
import './certification.css'
import AVTR1 from '../../assets/aws_cp.png'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'AWS Certified Cloud Practitioner',
    review: 'Achieved fundamental understanding of IT services and their uses in the AWS Cloud. Demonstrated cloud fluency and foundational AWS knowledge.',
    inspect: 'https://www.credly.com/badges/feaa227f-c3ab-4d1f-8e74-d35ec37c8b76',
  }
]
  
const Certification = () => {
    return (
        <section id='certification'>
      {/* <h5>Outside of class</h5> */}
      <h2>Certification(s)</h2>
      <Swiper className="container certification__container"
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}
     >
        {
          data.map(({ avatar, name, review, inspect }, index) => {
            return (
              <SwiperSlide key={index} className="certification">
                <div className="certification__item">
                  <img src={avatar} />
                </div>
                <h5 className='certificate__name'>{name}</h5>
                <small className='certificate__review'>{review}</small>
                <div className="certification__item-cta">
                <a href={inspect} className='btn'>Inspect</a>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
      </section>
    );
}

export default Certification;