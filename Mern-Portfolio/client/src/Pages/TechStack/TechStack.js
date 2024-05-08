import React from 'react'
import '../TechStack/techstack.css'
import { TechstackList } from '../../utils/TechstackList'

const TechStack = () => {
  return (
    <>
        <div className='container techstack' id='tech-stack'>
            <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Technologies Stack</h2>
            <hr/>
            <p className='pb-3 text-center'>
              👉 including programming languages, frameworks, databases, front-end and back-end tools,and APIS
            </p>
            <div className='row card-layout'>
              {TechstackList.map((tech)=>(

                <div key={tech._id} className='col-md-3'>
                  <div className='card-m-2'>
                    <div className='card-content'>
                      <div className='card-body'>
                        <div className='media d-flex justify-content-center one-card'>
                          <div className='align-self-center'>
                            <tech.icon className='tech-icon' />
                          </div>

                          <div className='media-body'>
                            <h5>{tech.name}</h5>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                // <h1>{tech.name}</h1>
              ))}
            </div>

        </div>

    </>
  )
}

export default TechStack