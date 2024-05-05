import React from 'react'
import Layout from './Components/Layout/Layout'
import About from './Pages/About/About'
import TechStack from './Pages/TechStack/TechStack'
import Projects from './Pages/Projects/Projects'
const App = () => {
  return (
    <>
      <Layout />
      <About />
      <TechStack />
      <Projects />
    </>
  )
}

export default App