import React,{useState} from 'react'
import Home from '../../Pages/Home/Home'
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import "./layout.css"
import Menus from '../Menus/Menus'

const Layout = () => {
  const [toggle, setToggle] = useState(true)

//change toggle
const handleToggle = ()=>{
  setToggle(!toggle);
}

  return (
    <>
        <div className='sidebar-section'>
          <div className={toggle ? ('sidebar-toggle sidebar') : ('sidebar')}>
            <div className='sidebar-toggle-icons'>
           
              <p onClick={handleToggle}>
                {
                  toggle ? (<RxDoubleArrowLeft size={30} />) : (<RxDoubleArrowRight size={30} />)
                }
                
              </p>

             

             </div>

             <Menus toggle={toggle} />  

          </div>

          <div className='container'>
            <Home/>
            
          </div>


        </div>

    </>
  )
}

export default Layout