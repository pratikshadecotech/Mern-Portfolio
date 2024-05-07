import React from 'react'
import '../WorkExp/WorkExp.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { SiReact } from "react-icons/si";

const WorkExp = () => {
  return (
   <>
      <div className='container work'>
        <div className='work-exp'>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Projects</h2>
          <hr/> 

          <VerticalTimeline lineColor='black'>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">XYZ, Pvt Ltd</h4>
              <p className='work-desc'>
                description
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'white', color: 'black' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2011 - present"
              iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
              icon={<SiReact />}
            >
              <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">XYZ, Pvt Ltd</h4>
              <p className='work-desc'>
                description
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>

        </div>
      </div>

   </>
  )
}

export default WorkExp