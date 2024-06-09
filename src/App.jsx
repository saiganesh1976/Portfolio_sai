import react from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from'./Components/Hero/Hero'
import About from './Components/About/About'
import Education from './Components/Education/Education'
import Experience from './Components/Experiences/Experience'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App
