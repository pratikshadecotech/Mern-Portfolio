import React from 'react'
import '../Contact/Contact.css'
import {BsLinkedin} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import Rotate from 'react-reveal/Rotate';
import LightSpeed from 'react-reveal/LightSpeed';

const Contact = () => {
  return (
    <>
      <div  className=' contact' id='contact'>
        <div className='card card0 border-0'>
          <div className='row'>
              <div className='col-md-6 col-lg-6 col-xk-6 col-sm-12'>
                <div className='card1'>
                  <div className='row border-line'>
                    <LightSpeed>
                      <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714608000&semt=ais" alt="contact"/>
                    </LightSpeed>
                  </div>
                </div>
              </div>

              <div className='col-lg-6'>

                <Rotate>

                
                <div className='card2'>
                <div className='row'>
                    <div className='row title'>
                  
                        <h6>Contact With 
                          <BsLinkedin color='blue' size={36} className='ms-2' />
                          <BsGithub color='black' size={36} className='ms-2' />

                        </h6>
                    </div>
                  

                  <div className='row'>
                      <div className='line' />
                      <small className='or text-center'>OR</small>
                      <div className='line' />
                      
                  </div>

                  <div className='row'>
                    <input type='text' name='name' placeholder='Enter Your Name' className='mb-3' />
                  </div>

                  <div className='row'>
                    <input type='email' name='email' placeholder='Enter Your Email' className='mb-3' />
                  </div>


                  <div className='row'>
                    <textarea type='text' name='msg' placeholder='Enter Your Message' className='mb-3' />
                  </div>

                  <div className='row'>
                    <button className='button' type='submit'>Send Message</button>
                  </div>
                </div>  
                </div>

                </Rotate>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact