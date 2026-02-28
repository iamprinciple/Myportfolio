import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareWhatsapp,faLinkedin, faTelegram, faTwitter  } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <footer className="bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 py-12">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-center">
                    Emmanuel Adebayo
                </h3>
                <div className="flex gap-6">
                    <a href="https://wa.me/09069328820" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faSquareWhatsapp} size="2x" className="text-green-500" />
                    </a>
                    <a href="https://www.linkedin.com/in/adebayo-emmanuel" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" className="text-blue-700" />
                    </a>
                    <a href="https://t.me/principle19" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faTelegram} size="2x" className="text-blue-500" />
                    </a>
                    <a href="https://twitter.com/iamprinciple" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                        <FontAwesomeIcon icon={faTwitter} size="2x" className="text-blue-400" />
                    </a>
                </div>
                <small className="text-gray-500 dark:text-gray-400 text-center">
                    &copy; 2025 Adebayo. All rights reserved.
                </small>
                <strong className="text-gray-700 dark:text-gray-300 text-center">
                    Designed & Developed by Emmanuel Adebayo
                </strong>
            </div>
        </footer>
    )
}

export default Footer