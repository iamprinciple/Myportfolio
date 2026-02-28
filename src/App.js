import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Fade from './components/Fade'

const App = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-gray-200">
      <Navbar />
      <Home/>
      <Fade>
        <About/>
      </Fade>
      <Fade>
        <Skill/>
      </Fade>
      <Fade>
        <Project/>
      </Fade>
      <Fade>
        <Contact/>
      </Fade>
      
      <Footer/>
    </div>
  )
}

export default App