import { faCalendar, faClock, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Navigation from '../Navbar/Navbar'
import "./Hero.css"
import SideNav from '../SideNav/SideNav'
const Hero = () => {
  return (

    <header>

<Navigation/>
<SideNav/>
<div className='MyHero'>




<div className='container'>
    <div className='row'>
        <div className='div-left col-lg-6  col-md-12'>
            <h3>Moviex</h3>
            <h2>Unlimited <span>Movies</span> ,TVs Shows, & More.</h2>
        
        <div className="details">
            <ul>
             <li>
            <span>PG 18</span>    
            <span>HD</span>    
            </li>  

            <li>
            <span>romance,</span>    
            <span>Drama</span>    
            </li>

            <li>
            <span><FontAwesomeIcon icon={faCalendar} /> 2022 </span>
          <span><FontAwesomeIcon icon={faClock} /> 128 min </span>
            </li>
            </ul>
        </div>
        <button><FontAwesomeIcon icon={faPlay} />watch now</button>

        </div>


    </div>
</div>

      
    </div>


    </header>
  )
}

export default Hero
