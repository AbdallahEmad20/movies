import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navigation from '../Navbar/Navbar'
import "./MovieDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faBrush, faClock, faCrutch, faDeleteLeft, faRemove, faStar } from '@fortawesome/free-solid-svg-icons'
import photto from"../Assets/pexels-pixabay-220453.jpg"
import userPhoto from "../Assets/person_4.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Swal from 'sweetalert2'
const MovieDetails = ({Myfilms}) => {

// comments section
const [comment , SetComment] =useState("")
const [comments , setComments] =useState([])

const  myRef =useRef()

//  Add comment  
    const AddCommentFun=()=>{
   if(myRef.current.value !== ""){
    setComments(()=>[...comments , comment])
    myRef.current.value =""
    SetComment("")
  
   }else{
    return false
   }
    }


// Remove comment

const RemoveItem =(index)=>{

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {

      let A=[...comments]
      A.splice(index , 1)
      setComments(A)

      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });



  
}

// End uses commment section
// ===============================================

// Start uses DetailsMovies section
  const params =useParams()

// unique film 
const [film, setFilm]=useState({})

useEffect(()=>{
FetchData()
},[])

async function FetchData (){
    const response = await fetch(`https://www.omdbapi.com/?i=${params.myId}&thor&apikey=301de9e8`)
    const data  =await response.json();
    console.log(data)
    setFilm(data)
    }


console.log("filmaia" , film)
// End uses DetailsMovie


    return (
    <div className='MovieDetails'>

      <Navigation/>

{/* Start section Details  */}
<div className="container">
 

  <div className="detailsPage ">

<div className="row">

<div className="Imagee col-lg-3 col-md-6">
      <img src={film.Poster}/>
    </div>


    <div className="ContentSec col-lg-9">


<div className="ContentSecCenter">

<h5>{film.Title}</h5>
       <div className="typess">
        <p className='Cinema'>cinema</p>
        <p>Drama</p>
        <p>Thriller</p>
       </div>

       <div className="rating" style={{marginBottom:"10px"}}>
        <p style={{fontSize:"15px"}}>{film.imdbRating}</p>
<div className="icons d-flex" style={{marginTop:"-10px"}}>
<FontAwesomeIcon  icon={faStar} style={{fontSize:"12px" ,  color:"gold"  , marginRight:"5px"}}/>
<FontAwesomeIcon  icon={faStar} style={{fontSize:"12px" ,  color:"gold" , marginRight:"5px"}}/>
<FontAwesomeIcon  icon={faStar} style={{fontSize:"12px" ,  color:"gold" , marginRight:"5px"}}/>
<FontAwesomeIcon  icon={faStar} style={{fontSize:"12px" ,  color:"gold" , marginRight:"5px"}}/>

</div>
       </div>

<p style={{color:"#808080" , width:"80%" , marginTop:"15px"}}>{film.Plot}</p>
<p style={{color:"#808080" , width:"80%" , marginTop:"15px" , fontWeight:"500"}}>{film.Runtime} <FontAwesomeIcon icon={faClock} style={{marginLeft:"3px" , color:"#e4d804"}}/></p>
<p style={{color:"#808080" , width:"80%" , marginTop:"15px" , fontWeight:"500"}}>{film.Awards} <FontAwesomeIcon icon={faAward} style={{marginLeft:"3px" , color:"#e4d804"}}/></p>

<span style={{color:"#fff" , fontWeight:"600" , display:"flex" , alignItems:"baseline" }}>Actors: <p style={{color:"#808080" , width:"80%" , marginTop:"15px" , fontSize:"14px" , marginLeft:"5px"}}>{film.Actors}</p>
</span>

<span style={{color:"#fff" , fontWeight:"600" , display:"flex" , alignItems:"baseline" }}>Director: <p style={{color:"#808080" , width:"80%" , marginTop:"15px" , fontSize:"14px" , marginLeft:"5px"}}>{film.Director}</p>
</span>

<button className='Mybtn'>Watch Now</button>
</div>
    </div>
</div>
   </div>
</div>
{/* End section details */}



{/* Start section Best Movies */}


<div className="Posters">


<div class="titleeBest">
      <div class="col-lg-12 ">
      <h5>BEST TV Posters</h5>
      <h2>World Best TV Posters</h2>
      </div>
      
  </div>
        


<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
       loop={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >




        {
          Myfilms.map(filmaia=>(
            
            
     <SwiperSlide key={filmaia.id} className='swiperBlig'>
      
            <img src={filmaia.poster} />
          </SwiperSlide>
       
          ))
        }
      
      </Swiper>




</div>




{/* End section Best movies */}

{/* Start section commentd */}
<div className="sectionComments">
  <div className="container">
  
  <h2>Comments</h2>


<div className=" Comments col-lg-7 col-md-8 col-sm-12">
<div className="SearchFooter">

<textarea ref={myRef}   onChange={(e)=>SetComment(e.target.value)} placeholder='Add Your comment'/>
           <button className='Mybtnn' onClick={AddCommentFun} type='submit'>ADD</button>

</div>
{
   comments.map(( text , index)=>(
    <div key={index}  className="comment">
    <img style={{width:"50px" ,height:"50px" , borderRadius:"50%"  ,margin:"5px  0"}} src={userPhoto}/>
    <div className="commentContent">
      <h6 style={{marginBottom:"20px"}}>Abdallah Emad</h6>
<p>{text}</p>
    </div>
    <FontAwesomeIcon onClick={()=>RemoveItem(index)} icon={faRemove}/>
  </div>
))


}


  <div className="comment">
  <img style={{width:"50px" ,height:"50px" , borderRadius:"50%"  ,margin:"5px 0"}} src={photto}/>
  <div className="commentContent">
    <h6 style={{marginBottom:"20px"}}>Ahmed Mohammed</h6>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis eius praesentium nulla quaerat porro distinctio pariatur natus eveniet est adipisci voluptatum earum aliquid, quia laborum nesciunt excepturi quidem, aliquam quisquam.</p>
  </div>
</div>
        </div>




  </div>
</div>

{/* End section comments */}
    </div>
  )

    }
export default MovieDetails
