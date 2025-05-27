import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import Services from './components/Services'
import Mywork from './pages/Mywork'
import Contact from './pages/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
