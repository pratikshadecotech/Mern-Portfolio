import React from 'react'
import Layout from './Components/Layout/Layout'
import About from './Pages/About/About'
import TechStack from './Pages/TechStack/TechStack'
import Projects from './Pages/Projects/Projects'
import Education from './Pages/Educations/Education'
import WorkExp from './Pages/WorkExp/WorkExp'

const App = () => {
  return (
    <>
      <Layout />
      <About />
      <Education />
      <TechStack />
      <Projects />
      <WorkExp />

    </>
  )
}

export default App