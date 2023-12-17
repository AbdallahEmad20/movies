import React from 'react'
import Hero from '../Hero/Hero'
import Movies from '../Movies/Movies'
import LivePhoto from "../Assets/live_img.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay} from '@fortawesome/free-solid-svg-icons'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./Home.css"
import BestMovies from '../BestMovies/BestMovies'
import Footer from '../Footer/Footer'
import Download from '../Download/Download';
const Home = ({films , loading , setFilms}) => {


  return (
    <div>

   <Hero/>

{/* section Movies */}
   <Movies Films={films} Loading={loading} setFilms={setFilms}/>
{/* End section MOvies */}


{/* card of Movie */}
   <section className='sectopic'>
<div className="container">

<div className="row">

<div className=" sectopicCon col-lg-6 col-md-12">
<p> ONLINE STREAMING</p>
<h2>Live Movie $ TV Shows For Friends & Family</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis quia in, doloremque debitis tempore cupiditate porro explicabo commodi earum, ea quidem perspiciatis ipsa perferendis.</p>

<div className="addingThings">

<div className='specialDiv'>
<h3>HD</h3>
<h3>4K</h3>
</div>

<div className='devaia'>
<h5 style={{color:"#000" , fontWeight:"bold" , fontSize:"20px"}}>20K +</h5>
<p style={{color:"#000" , fontSize:"15px" , fontWeight:"bold"  ,marginTop:"-10px"}}> Active customer</p>
</div>

</div>

<button><FontAwesomeIcon icon={faPlay} />watch now</button>

 </div>


  <div className= "ImageDevv col-lg-6 col-md-12">
  <img src={LivePhoto} />
 </div>


</div>
</div>

   </section>

{/* End card of MOvie */}



{/* start section Best movies */}
<BestMovies films={films}/>
{/* End section Best movies */}


{/* Start Download section */}

<Download/>


{/* End Download section */}

</div>
  )
}

export default Home
