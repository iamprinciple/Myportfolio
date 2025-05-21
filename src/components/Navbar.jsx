import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = ({ toggleTheme }) => {
  return (
    <nav>
      <button>
        <FontAwesomeIcon icon={faHouse} size="2x" />
      </button>
      <div className='navholder'>
        <div className='d-flex gap-3'>
          <a href="#about" >About</a>
          <a href="#skill" >Skill</a>
          <a href="#project" >Project</a>
          <a href="#contact" >Contact Me</a>
        </div>
        <button onClick={toggleTheme}>
          <FontAwesomeIcon icon={faMoon} size='2x' />
        </button>
      </div>
      <div className='dropdown'>
        <button><FontAwesomeIcon icon={faBars} size='2x' /></button>
        <div className='dropMenu'>
          <div className='d-flex flex-column gap-3'>
            <a href="#about" >About</a>
            <a href="#skill" >Skill</a>
            <a href="#project" >Project</a>
            <a href="#contact" >Contact Me</a>
          </div>
          <button onClick={toggleTheme}>
            <FontAwesomeIcon icon={faMoon} size='2x' />
          </button>
        </div>
      </div>

    </nav>
  )
}

export default Navbar