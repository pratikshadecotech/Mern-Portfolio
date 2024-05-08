import React from 'react'
import Layout from './Components/Layout/Layout'
import About from './Pages/About/About'
import TechStack from './Pages/TechStack/TechStack'
import Projects from './Pages/Projects/Projects'
import Education from './Pages/Educations/Education'
import WorkExp from './Pages/WorkExp/WorkExp'
import Contact from './Pages/Contact/Contact'
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  return (
    <>
      <Layout />
      <About />
      <Education />
      <TechStack />
      <Projects />
      <WorkExp />
      <Contact />
      <ScrollToTop smooth 
      color='#f29f67'
      style={{backgroundColor:'#1e1e2c',borderRadius:'60px'}} />

    </>
  )
}

export default App