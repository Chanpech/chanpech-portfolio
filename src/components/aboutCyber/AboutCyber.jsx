import React from 'react'
import './aboutCyber.css'
import ME from '../../assets/CyberSecurity.png'
import { TbCertificate } from 'react-icons/tb'
import { TbBrandApple } from 'react-icons/tb'
import { VscFileSubmodule } from 'react-icons/vsc'

const AboutCyber = () => {
  return (
    <section id='aboutCyber'>
      <h5> Minor</h5>
      <h2>Cybersecurity</h2>
      <div className="container aboutCyber__container">
        <div className="aboutCyber__content">
          <div className="aboutCyber__cards">
            <article className='aboutCyber__card'>
              <TbCertificate className='aboutCyber__icon' />
              <h5>Scripting Experience</h5>
              <small>1+ years</small>
            </article>
            <article className='aboutCyber__card'>
              <VscFileSubmodule className='aboutCyber__icon' />
              <h5>Jamf Pro Management</h5>
              <small>2+ years</small>
            </article>
          </div>
          <p>
          With a strong foundation in cybersecurity, I possess extensive experience in VM Fusion Kali Linux environments, 
          adept at conducting thorough network scans and packet sniffing utilizing tools like WireShark. Proficient in CLI Nmap for network 
          reconnaissance, I excel in configuring LMAP environments with XAMPP and possess expertise in identifying and mitigating SQL injection vulnerabilities. 
          Skilled in SQLMap for privilege escalation and well-versed in XSS attack prevention techniques, I am also capable of executing ARP 
          and Man-in-the-Middle attacks leveraging tools such as Ettercap. My multifaceted skill set ensures comprehensive protection against various cyber threats while enabling proactive defense measures.
          </p>
        </div>
        <div className="aboutCyber__me">
          <div className="aboutCyber__me-image">
            <img src={ME} alt="AboutCyber Image" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutCyber