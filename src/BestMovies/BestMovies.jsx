import React from 'react'
import Movie from '../Movie/Movie'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestMOvies.css"
const BestMovies = ({films}) => {

  const settings = {
    //   dots: false,
    // infinite: false,
    // speed: 500,
    // slidesToShow: 4,
    // slidesToScroll: 4,
    initialSlide: 0,
  
  
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed:3000,
    // arrows: false,


    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
         initialSlide: 2,
         autoplay: true,

        }
      },

      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          initialSlide: 2
        }
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  
  }
  

  

  return (
    <div>
      

      <section className='BestMovies'>
    <div className="container">

    <div class="titleeBest">
      <div class="col-lg-12 ">
      <h5>BEST TV MOVIES</h5>
      <h2>World Best TV Series</h2>

      </div>
  </div>


        
        <div className="row">

    

<Slider  {...settings}>

{
        films.slice(0,6).map(film=>(

<Movie key={film.id} Film={film}/>

          ))
         }

</Slider>
        </div>
    </div>

   </section>


    </div>
  )
}

export default BestMovies
