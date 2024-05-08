import React from 'react'
import '../Contact/Contact.css'
const Contact = () => {
  return (
    <>
      <div  className='contact'>
        <div className='card card0 border-0'>
          <div className='row'>
              <div className='col-md-6 col-lg-6 col-xk-6 col-sm-12'>
                <div className='card1'>
                  <div className='row border-line'>
                    <img src="https://img.freepik.com/free-photo/hot-line-contact-us-call-center-search-interface_53876-124009.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714608000&semt=ais" alt="contact"/>
                  </div>
                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='row'>
                  <div className='card2'>
                      <h6>Contact With Icons</h6>
                  </div>
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

              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact