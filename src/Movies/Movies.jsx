
import React, { useEffect, useRef } from 'react'
import Movie from '../Movie/Movie'

import { ClipLoader  } from 'react-spinners'

import "./Movies.css"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import imageBack from "../Assets/ucm_bg_shape (1).png";
// Mapping buttons films 

const filmsName=[ "All", "Adventure" , "Feature" , "War" , "Horror"]


const Movies = ({Films , Loading , setFilms  }) => {



  const [Active , setActive] =useState("All")
 const RefMe =useRef()

// search for movies 
const [MyData , setMyData]=useState([])
const [query  , setQuery] =useState("")
function handleSearch(valueMe){
  setQuery(valueMe)
var myRes=Films.filter(movie=>movie.movieName.toLowerCase().includes(valueMe))
  setMyData(myRes)

}

// End search for movies












// return New series of films with using Api
 async function SeriesFilms(nameMovie){
  setActive(nameMovie)
    const response = await fetch(`https://www.omdbapi.com/?s=${nameMovie}&apikey=301de9e8`)
    const data  =await response.json();
    const dataTransform =data.Search.map((item=>{
       return {
        id:item.imdbID,
        movieName:item.Title,
        year:item.Year,
        type:item.Type,
        poster:item.Poster
    
       } 
    
    }))

    setFilms(dataTransform)

}


  return (

    


    <div className='Movies'>



<img className='MyImageBAck'  src={imageBack}/>

<div className='container'>

{/* satrt buttons of types of movies */}


{/* End buttons of movies */}
<div className="MoviesTitle ">
  
<div className="row">


<div className="speak col-lg-6 col-md-6">
  <p>
ONLINE STREAMING</p>

<h2>Upcoming Movies</h2>
</div>

{/* start sec search  */}

<div className="searchTop  col-lg-3 col-md-6">

<div className="searchaia">
<input type='search' ref={RefMe}  placeholder='Enter youtr Search' onChange={(e)=>handleSearch(e.target.value)} />
</div>


<div className="searchResult">

{

 query !=="" ?
  
  MyData.map(myData=>(
<div key={myData.id} className="result">
 
 <img src={myData.poster}/>
   <Link to={`/moviedetails/${myData.id}`} className='movieLink'>{myData.movieName}</Link>

</div> 
  



    )):

null


  }

{/* End sec Search */}
</div>
</div>




</div>

</div>



<div className="buttonss col-lg-12">

{

filmsName.map((firstName , index)=>(
  <button key={index} type='submit' onClick={()=>SeriesFilms(firstName)} className={Active === `${firstName}` ? "mybtn" :null}>{firstName}</button>
))
}


</div>


{/* start deploying  movies */}
<div className='row'>

{

Loading ?

<div className='preloaderr'>
  
<ClipLoader  className='scaleLoad' color={"#e4d804"} Loading={Loading} size={100} height={100} margin={10}  />
    </div>

:
Films.slice(0,8).map(film=>(
 <div className="moviee  col-xl-3  col-lg-4  col-md-6 col-sm-6 col-xs-12">

    <Movie key={film.id} Film={film}/>
</div>
))



        }


</div>

</div>
 {/* End deploying movies */}


    </div>



  )
}

export default Movies
