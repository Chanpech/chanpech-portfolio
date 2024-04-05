import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Habit Builder.png'
import IMG2 from '../../assets/LBFE_LOGOV.png'
import IMG3 from '../../assets/Evaluation.png'
import IMG4 from '../../assets/BlizzardApocalypse.png'
import IMG5 from '../../assets/threads.jpg'
import IMG6 from '../../assets/counter.png'
import IMG7 from '../../assets/data_structure.jpg'
import IMG8 from '../../assets/EE_Circuits.jpg'

const data = [
  {
    id: 1, 
    image: IMG1,
    title: 'Habit Builder',
    github: 'https://github.com/MTU-CS3141-Team15/CS3141-R02-team15',
    //demo: 'https://github.com/MTU-CS3141-Team15/CS3141-R02-team15'
  },
  {
    id: 2, 
    image: IMG2,
    title: 'Little Brothers Friends of the Elderly',
    github: 'https://github.com/MTUHIDE/little-brothers'
  },
  {
    id: 3, 
    image: IMG3,
    title: 'Student Evaluation',
    github: 'https://github.com/Chanpech/StudentEvaluation-And-CourseRegistration'
  },
  {
    id: 4,
    image: IMG7,
    title: 'Data Structures Projects',
    github: 'https://github.com/Chanpech/CS2321-Data-Structures'
    },
  {
    id: 5, 
    image: IMG5,
    title: 'Concurrent Programming Projects',
    github: 'https://github.com/Chanpech/CS3331-Concurrent-Computing-Projects'
  },
  {
    id: 6, 
    image: IMG6,
    title: 'Click-Counter With Local Storage',
    github: 'https://github.com/Chanpech/Lighthall-Super-Leauge-Click-Counter',
    demo: 'https://ligh-hall-super-leauge-challenge1.vercel.app/'
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Course Projects</h2>

      <div className="container portfolio__container">
        <div className="container portfolio__sub__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn'>GitHub</a>
              </div>
            </article>
            )
          })
        }
        </div>


      </div>
      <h2>Projects</h2>
    </section>
  )
}
//<a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
export default Portfolio
