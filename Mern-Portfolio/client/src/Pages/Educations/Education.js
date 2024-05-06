import React from 'react'
import '../Educations/Education.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
   <>
     <div className='container education'>

        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">Top Recent Projects</h2>
        <hr/>

        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid gray' }}
                date="2011 - 2024"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">MCA</h3>
                <h4 className="vertical-timeline-element-subtitle">CBD,Belapur</h4>
                
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'white', color: 'black' }}
                contentArrowStyle={{ borderRight: '7px solid  gray' }}
                date="2011 - 2022"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">BSCIT</h3>
                <h4 className="vertical-timeline-element-subtitle">Kelkar College,Mulund</h4>
                
            </VerticalTimelineElement>
        </VerticalTimeline>

    </div>
   
   </>
  )
}

export default Education