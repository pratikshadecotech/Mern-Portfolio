import React from 'react'
import '../Projects/projects.css'
import Spin from 'react-reveal/Spin';
import ErpProject from '../../assets/images/erp_project_image.jpeg'; 

const Projects = () => {
  return (
  
    <>
    
        <div className='container project' id='projects'>

            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Projects</h2>
            <hr/>
            <p className='pb-3 text-center'>
              Here are my top 3 recent project with live links and source code
            </p>

            {/* card design */}

            <div className='row' id="ads">

                <Spin>

             
                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full Stack</span>
                            <img src={ErpProject} alt='project1'></img>
                        </div>

                        <div  className='card-image-overly mt-3'>
                            <span className='card-detail-badge'>Php</span>
                            <span className='card-detail-badge'>Laravel</span>
                            <span className='card-detail-badge'>Mysql</span>
                            <span className='card-detail-badge'>React</span>
                        </div>

                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase'>ERP Application</h5>
                            </div>
                        </div>

                        <a className='ad-btn' target="_blank" href='https://ahtuat.erpnhts.in/'>View</a>

                    </div>
                 
                </div>

                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full Stack</span>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSIKjK8fKoxA7xhW7ItXvYLSKUrmheeyKsw&s' alt='project1'></img>
                        </div>

                        <div  className='card-image-overly mt-3'>
                            <span className='card-detail-badge'>Node</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>Mongodb</span>

                        </div>

                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase'>Techinfo yt shopping app</h5>
                            </div>
                        </div>

                        <a className='ad-btn' href='#'>View</a>

                    </div>
                 
                </div>

                <div className='col-md-4'>
                    <div className='card rounded'>
                        <div className='card-image'>
                            <span className='card-notify-badge'>Full Stack</span>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSIKjK8fKoxA7xhW7ItXvYLSKUrmheeyKsw&s' alt='project1'></img>
                        </div>

                        <div  className='card-image-overly mt-3'>
                            <span className='card-detail-badge'>Node</span>
                            <span className='card-detail-badge'>Express</span>
                            <span className='card-detail-badge'>React</span>
                            <span className='card-detail-badge'>Mongodb</span>

                        </div>

                        <div className='card-body'>
                            <div className='ad-title'>
                                <h5 className='text-uppercase'>Techinfo yt shopping app</h5>
                            </div>
                        </div>

                        <a className='ad-btn' href='#'>View</a>

                    </div>
                 
                </div>

                </Spin>


            </div>
        </div>
    </>
  )
}

export default Projects