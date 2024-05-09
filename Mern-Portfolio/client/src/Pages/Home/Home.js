import React from 'react'
import Typewriter from 'typewriter-effect';
import '../home.css'
import Resume from '../../assets/docs/resume.txt'
import { useTheme } from '../../context/ThemeContext';
import { BsMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';

const Home = () => {

  // const[theme, setTheme] = useTheme();

  return (
    <>
        <div className='container-fluid home-container ' id="home">
          <div className='theme-btn'></div>
          {/* {theme === 'light' ? (<BsMoonStarsFill />) : (<BsFillSunFill />)} */}
          <div className='container home-content'>
            <Fade right>
              <h1>Hi 👋 I'm pratiksha</h1>
              <h2>
                <Typewriter
                  options={{
                    strings: ['Full Stack Developer!', 'Mern Stack Developer!'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h2>
            </Fade>
            
          <Fade bottom>
            <div className='home-buttons'>
              <button className='btn btn-hire'>Hire Me</button>
              <a className='btn btn-cv' href={Resume} download='your_name.pdf'>My Resume</a>
            </div>  
          </Fade>
          </div>
     
        </div>
    </>
   
  )
}

export default Home