import React from 'react'
import '../Menus/menu.css'
import {FcHome} from 'react-icons/fc'
import { FcAbout } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcReadingEbook } from "react-icons/fc";
import { FcVideoProjector } from 'react-icons/fc';
import { FcVoicePresentation } from 'react-icons/fc';
import { FcBusinessContact} from 'react-icons/fc';

const Menus = ({toggle}) => {
  return (

    <>
    {toggle ? (

        <>
            <div  className='navbar-profile-pic'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3uszAY8Dp7Ofnh6OnYaHnD6t0xCUYft-TXA&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3uszAY8Dp7Ofnh6OnYaHnD6t0xCUYft-TXA&s' />
            </div>

            <div className='nav-items'>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcHome />    
                        Home
                    </div>
                </div>

                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcAbout />    
                        About
                    </div>
                </div>


                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcPortraitMode />    
                        Work Experience
                    </div>
                </div>


                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcBiotech />    
                        Tech Stack
                    </div>
                </div>


                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcReadingEbook  />    
                        Education
                    </div>
                </div>

                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcVideoProjector  />    
                        Projects
                    </div>
                </div>

                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcVoicePresentation  />    
                        Testimonial
                    </div>
                </div>

                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcBusinessContact  />    
                        Contact
                    </div>
                </div>
                
                

            </div>
        </>
    ) : (

        <>
            <div className='nav-items'>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcHome title='Home'/>    
                        
                    </div>
                </div>

                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcAbout title='About' />    
                        
                    </div>
                </div>


                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcPortraitMode title='Work Experience' />    
                        
                    </div>
                </div>


                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcBiotech title='Tech Stack' />    
                        
                    </div>
                </div>


                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcReadingEbook  title='Education' />    
                        
                    </div>
                </div>

                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcVideoProjector title='Projects' />    
                        
                    </div>
                </div>

                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcVoicePresentation title='Testimonial' />    
                        
                    </div>
                </div>

                <div className='nav-item'>
                    <div className='nav-link'>
                        <FcBusinessContact title='Contact' />    
                        
                    </div>
                </div>
                
                

            </div>
        </>
    )}
    </>
    
  )
}

export default Menus