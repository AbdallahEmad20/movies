import React, { Fragment, useEffect, useRef, useState } from 'react'
import "./Movie.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const Movie = ({Film}) => {



// const MyPrevent=(event)=>{
//   event.preventDefault()
// }

  // =========================================

    // return only one product 




// =========================================
  return (
  <Fragment>


        <div className='cardd'>
        <div className='DivImage'>
        <Link to={`moviedetails/${Film.id}`}>
          <img src={Film.poster}/>
          </Link>
        </div>


        <div className="contentDiv">
            <p>{Film.movieName}</p>
            <h4>{Film.year}</h4>
        </div>

        <div className='contentTwoDiv'>


      <button style={{fontSize:"14px",padding:"5px"}}>Movie</button>
   

         <div className="conIcons">
           <div>
          
           <FontAwesomeIcon icon={faHeart}/>
           <p>3.9</p>
          

     </div>

          <div>
         <FontAwesomeIcon icon={faClock}/>
           <p>120min</p>
                 
     </div>
         
         
     </div>
</div>
</div>
     
  </Fragment>

 
  )
}

export default Movie
