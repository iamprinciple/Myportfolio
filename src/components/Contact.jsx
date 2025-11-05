import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
// import Footer from './Footer'

const Contact = () => {
    return (
        <section id='contact'>
            {/* <div className='contactholder'>
            <h2>Let's work together</h2>
        </div> */}
            <div className='contactholder'>
                <h2 style={{ textAlign: "center", fontSize: "40px", fontWeight: "800"  }}>Contact Me</h2>
                <div className='contact_div'>
                    <div className='d-flex flex-column gap-4 justify-content-center text-center align-items-center'>
                        <div className='d-flex flex-row gap-3 align-items-center'>
                            <div className='d-flex flex-column gap-2'>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <small>Location</small>
                            </div>
                        </div>
                        <i>NIGERIA</i>
                    </div>
                    <div className='d-flex flex-column gap-4 justify-content-center text-center align-items-center'>
                        <div className='d-flex flex-row gap-3 align-items-center'>
                            <div className='d-flex flex-column gap-2'>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <small>Email</small>
                            </div>
                        </div>
                        <a href="mailto:holubusayor@gmail.com">
                            <i>holubusayor@gmail.com</i>
                        </a>

                    </div>
                    <div className='d-flex flex-column gap-4 justify-content-center text-center align-items-center'>
                        <div className='d-flex flex-row gap-3 align-items-center'>
                            <div className='d-flex flex-column gap-2'>
                            
                            <FontAwesomeIcon icon={faPhone} />
                            <small>Call</small>
                            </div>
                        </div>

                        <i>+2349069328820</i>
                    </div>
                </div>

            </div>
            {/* <Footer/> */}
        </section>
    )
}

export default Contact