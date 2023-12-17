import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload, faPlay, faScrewdriverWrench, faTv, faVideo, faVolumeHigh } from '@fortawesome/free-solid-svg-icons'
import photosec from "../Assets/services_img.jpg"
import "./Download.css"
const Download = () => {
  return (
    <div>


<div className="sectionEnd">
<div className="container">
<div className="row">

<div className="secEndImage col-lg-6 col-md-12">
<div className="services">
<img src={photosec} alt='photoServices' />
<a href='#'>Download</a>
</div>
</div>

<div className="secEndCon  col-lg-6  col-md-12">
<p>OUR SERVICES</p>
<h2>Download Your Shows Watch Offline</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, ea animi unde dignissimos ab vero fugiat qui, impedit esse distinctio voluptatum pariatur, corrupti totam. Omnis dicta animi doloremque? Ipsam est porro, quam ut non minus animi explicabo dignissimos! Dolore, maiores.</p>

<div className="contentdiv">
<div className="iconaia">
<div className="back">
<FontAwesomeIcon icon={faTv}/>

</div>
</div>
<div className="condivv">
   <h5>Enjoy on your tv</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum a nesciunt
   </p>
</div>
</div>


<div className="contentdiv">

<div className="iconaia">
<div className="back">
<FontAwesomeIcon icon={faTv}/>

</div>
</div>
<div className="condivv">
   <h5>Watch EveryWhere</h5>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolorum a nesciunt
   </p>
</div>
</div>


</div>

</div>
</div>

</div>


      
    </div>
  )
}

export default Download
