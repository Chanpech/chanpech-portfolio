import React from 'react'
import './cybersecurity.css'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';

const Cybersecurity = () => {

  return (
    <section id='experience'>
      <h5>Cybersecurity Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>PenTest Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>nmap</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>John the Ripper</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Metasploit</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Hydra</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND EXPERIENCE */}
        <div className="experience__frontend">
          <h3>Defense Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>iptables</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Snorts</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>pfsense</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Windows Firewall</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND EXPERIENCE */}
        <div className="experience__others">
          <h3>Device Management</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Jamf Pro</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Active Directory</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>LdapV3</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>NoMad AD</h4>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND EXPERIENCE */}
        <div className="experience__others">
          <h3>Repository</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Git</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>BitBucket</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>GitLab</h4>
              </div>
            </article>
          </div>
        </div>
        
      </div>

    </section>
  )
}

export default Cybersecurity