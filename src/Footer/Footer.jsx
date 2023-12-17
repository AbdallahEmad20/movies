import React from 'react'
import "./Footer.css"
import MyLogo  from "../Assets/logo.png"
import FootImageOne from"../Assets/blog_thumb02.jpg"
import FootImageTWo from "../Assets/blog_thumb01.jpg"
import faceBookk from "../Assets/icons8-facebook-48.png"
import insta from"../Assets/icons8-instagram-48.png"
import inn from "../Assets/icons8-in-48.png"
import twit from "../Assets/icons8-twitter-squared-48.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from '@fortawesome/free-solid-svg-icons'
import cards from "../Assets/card_img.png"
const Footer = () => {
  return (
    <div className='FooterFinal'>



      <div  className="footOne">
   
   <div className="container">
    <div className="row">
    <div className="contnetFootOne col-lg-6 col-md-6 col-sm-12">
        <h2>TRIAL START FIRST 30 DAYS</h2>
        <p>Enter Your Email To create or restart your membership</p>
        </div>
        <div className="SearchFooterr col-lg-6 col-md-6 col-sm-12">
        <input type='email' name="email" placeholder='Enter your Eamil'/>
           <button type='submit'>Submit</button>
        </div>

        </div>
         </div>

    </div>



    <footer class="  text-lg-start">

  <div class="container p-4">
   
    <div class="row">
     
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4 mb-md-0">
        <a class=" firstt" ><img style={{marginBottom:"25px"}} src={MyLogo}/></a>

        <ul class="list-unstyled">
          <li>
            < h5 class="MyColor">Movflx Online the relase etras thats sheets continig passag.</h5>
          </li>
          <li>
            < h5 class="MyColor"> Address : PO Box W75 Street</h5>
          </li>
          <li>
            < h5 class="MyColor">Phone : +24 1245 654 235</h5>
          </li>
          <li>
            < h5 class="MyColor">Email : info@exemple.com</h5>
          </li>
        </ul>
      </div>
     
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 class="textunique">Categories</h5>

        <ul class="list-unstyled  specialdic ">
          <li className='Linkss'>
            <a href="#!" class="MyColor">Action Movies</a>
            <p>(8)</p>
          </li>
        
          <li className='Linkss'>
            <a href="#!" class="MyColor">Download</a>
            <p>(3)</p>
          </li>
          <li className='Linkss'>
            <a href="#!" class="MyColor">Horror</a>
            <p>(8)</p>
          </li>
          <li className='Linkss'>
            <a href="#!" class="MyColor">Movies</a>
            <p>(5)</p>
          </li>
          
          <li className='Linkss'>
            <a href="#!" class="MyColor">streaming</a>
            <p>(5)</p>
          </li>
        </ul>
      </div>
      
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 class="textunique">Recent Posts</h5>

        <ul class="list-unstyled ">
          <li className='specialLi'>
            <img  src={FootImageOne}/>
  <div className="devaiaFoot">
  <a href="#!" class="TextSpecial">Where watch English movies free?</a>
<p>August 08, 2022</p>
  </div>
          </li>
       

          <li className='specialLi'>
            <img  src={FootImageTWo}/>
  <div className="devaiaFoot">
  <a href="#!" class="TextSpecial">Your Free Movie Streaming Purposes</a>
<p>August 08, 2022</p>
  </div>
          </li>


    
        </ul>
      </div>
   
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 class="textunique ">Follow Us</h5>

        <ul class="list-unstyled">
          <li className='ImageIconns'>
           <img src={faceBookk} />
           <img src={insta} />
           <img src={inn} />
           <img src={twit} />
          </li>
          <li className='EmailInput'>
           <input type='email' name='email' placeholder='Enter your Email'/>
<div className='Rokett'>
<FontAwesomeIcon icon={faRocket}/>

</div>
          </li>
       
        </ul>
      </div>
 
    </div>

  </div>
 


</footer>

<div className="footFinall">
 
<div className="container">


<div className="row">


<div className=" copyRight col-lg-6 col-md-6">
     <p>Copyright © 2022 All Rights Reserved By Movflx</p>
   </div>


   <div className=" cardss col-lg-3 col-md-6">
    <img src={cards} />  

   </div>


</div>

</div>

  </div>




   </div>

  )
}

export default Footer
