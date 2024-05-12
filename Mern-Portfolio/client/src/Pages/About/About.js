import React from 'react'
import "../About/about.css"
import Jump from 'react-reveal/Jump';
import Profile from '../../assets/images/profilepic.jpeg'

const About = () => {
  return (
    <>
    <Jump>
      <div className='about' id="about">
        <div className='row'>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
          <img src={Profile}  alt="profile-pic" />

          </div> 
          <div className='col-md-6 about-content'>
              <h1>About me</h1>
              <p>
              I am a skilled full-stack developer with experience in front-end and back-end technologies. I specialize in developing end-to-end applications that provide an optimal user experience With a passion for full-stack development, I am a proficient developer capable of designing and developing complex applications with expertise in Php, React, Mongodb and Node.js.
              </p>
          </div> 
  
        </div>

      </div>
      </Jump>
    </>
  )
}

export default About