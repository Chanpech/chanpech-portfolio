import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/AirbnbLogo.png'
import IMG2 from '../../assets/LBro.jpg'
// import IMG3 from '../../assets/Evaluation.png'
// import IMG4 from '../../assets/BlizzardApocalypse.png'
// import IMG5 from '../../assets/threads.jpg'
// import IMG6 from '../../assets/counter.png'
// import IMG7 from '../../assets/data_structure.jpg'
// import IMG8 from '../../assets/EE_Circuits.jpg'
import IMG9 from '../../assets/GM_Car.png'

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Airbnb Clone',
    github: 'https://my-home-booking-clone-app.vercel.app/',
    descriptions: 'A Full-Stack Airbnb Clone that is implemented through Next.js 13 App Router integrating React, Tailwind, Prisma, MongoDB, and NextAuth.'
  },
  {
    id: 2, 
    image: IMG2,
    title: 'Little Brothers',
    github: 'https://github.com/MTUHIDE/little-brothers',
    descriptions: 'A web application that helps administrator users to manage and delgates tasks to volunteered drivers.'
  },
  {
    id: 3, 
    image: IMG9,
    title: 'GM Car Comparison',
    github: 'https://github.com/MTUHIDE/GM-Automotive-Car-Comparison-App',
    descriptions: 'To create an online platform allowing users to compare two General Motors vehicles side-by-side based on survey and research.'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Highlighted Projects</h2>

      <div className="container portfolio__container">
        <div className="container portfolio__sub__container">
        {
          data.map(({id, image, title, github, demo,descriptions}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <h5>{descriptions}</h5>
              </div>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>Check It Out!</a>
              </div>
            </article>
            )
          })
        }
        </div>
      </div>
    </section>
  )
}
//<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
export default Portfolio
