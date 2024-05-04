import React from 'react'
import "../About/about.css"

const About = () => {
  return (
    <>
      <div className='about'>
        <div className='row'>
          <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhz1SSNcaEBhlNtUwQCe0x0gpLLySGyCFkkQ&s'  alt="profile-pic" />

          </div> 
          <div className='col-md-6 about-content'>
              <h1>About me</h1>
              <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
</p>
          </div> 

        </div>

      </div>
    </>
  )
}

export default About