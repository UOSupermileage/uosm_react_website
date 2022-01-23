import React from 'react';
//  import HorizontalScroll from 'react-scroll-horizontal' use later
import Landing from './components/Landing/Landing.js'
import Welcome from './components/Welcome/Welcome.js'
import Team from './components/Team/Team.js'
import Sponsors from './components/Sponsors/Sponsors.js'
import Contact from './components/Contact/Contact.js'
import Join from './components/Join/Join.js'
import Navbar from './components/Navbar'
import { useRef } from 'react'

function App() {
  const teamPage = useRef(null)

  const goToTeam = () =>
    window.scrollTo({ left: teamPage.current.offsetTop, behavior: 'smooth' })

  return (
    <div className="App">
      <Navbar />
      
      <Landing />
      <Welcome />
      <Team />
      <Sponsors />
      <Contact />
      <Join />
    </div>
  )
}

export default App