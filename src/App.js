import React, { useEffect, useState } from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import MovieDetails from './MovieDetails/MovieDetails'
import ScrollBtnTop from './ScrollBtnTop/ScrollBtnTop'
import Navigation from './Navbar/Navbar'
import Footer from './Footer/Footer'
const App = () => {


  const [films, setFilms]=useState([])
  const [loading , setLoading] = useState(true)
useEffect(()=>{
FetchData()
},[])

// get all data in api
async function FetchData (){
const response = await fetch("https://www.omdbapi.com/?s=All&apikey=301de9e8")
const data  =await response.json();
console.log("data" , data)

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
setLoading(false)
}

// End data

console.log("films" , films)






  return (
   <div>

   <Routes>
      <Route path='/'element={<Home films={films} loading={loading} setFilms={setFilms}/>}></Route>
     
      <Route path='moviedetails/:myId'element={<MovieDetails Myfilms={films}/>}></Route>
    

      </Routes>

      <Footer/>

<ScrollBtnTop/>
    </div>
  )
}

export default App
