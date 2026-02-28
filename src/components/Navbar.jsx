import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCode,
  faFolder,
  faMessage,
  faUser,
  faBars,
  faMoon,
  faHouse,
  faSun,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  { id: 'about', label: 'About', icon: faUser },
  { id: 'skill', label: 'Skill', icon: faCode },
  { id: 'project', label: 'Project', icon: faFolder },
  { id: 'contact', label: 'Contact', icon: faMessage },
]

const Navbar = ({ darkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  // 🔥 Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach(link => {
        const section = document.getElementById(link.id)
        if (!section) return

        const rect = section.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl  shadow-md ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-10">
        <nav className="flex items-center justify-between h-16">

          <a href="#home" className="text-xl  text-black">
            <FontAwesomeIcon icon={faHouse} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all
                  ${
                    active === link.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                {link.label}
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}

            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-md  text-gray-800 dark:text-white"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button> */}
          </div>

          <div className="md:hidden flex items-center gap-6">
            {/* <button
              onClick={toggleTheme}
              className="p-2 rounded-md  text-gray-800 dark:text-white"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button> */}

            <button
              onClick={() => setMenuOpen(prev => !prev)}
              className="text-xl text-gray-700 dark:text-gray-200"
            >
              <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
            </button>
          </div>
        </nav>

        {menuOpen && (
          <div className="md:hidden mt-3 rounded-lg bg-white dark:bg-gray-900 shadow-lg p-4 space-y-2">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.id)
                  setMenuOpen(false)
                }}
                className={`flex items-center justify-between px-3 py-2 rounded-md transition-all
                  ${
                    active === link.id
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-gray-800'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }
                `}
              >
                {link.label}
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar