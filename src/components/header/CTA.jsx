import React from 'react'
import CV from '../../assets/SWEResumeSpring2024.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href= {CV} download className='btn'> Download Résumé</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
