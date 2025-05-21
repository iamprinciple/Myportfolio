import React from 'react'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div >
        <div className='footer'>
            <h3>Emmanuel Adebayo</h3>
            <div className='icons'>
                <a href="https://wa.me/09069328820" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSquareWhatsapp}  size="2x" style={{ color: '#25D366' }}/>
                </a>
                
                <a href="https://www.linkedin.com/in/adebayo-emmanuel" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0077B5' }}/>
                </a>
                <a href="https://t.me/principle19" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTelegram} size='2x' style={{ color: '#0088cc' }}/>
                </a>
                <a href="https://twitter.com/iamprinciple" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#1DA1F2' }}/>
                </a>
                
            </div>
            <small>Copyright & copy 2025 Adebayo. All rights reserved.</small>
            <strong>Designed & Developed by Emmanuel Adebayo</strong>
        </div>
    </div>
  )
}

export default Footer