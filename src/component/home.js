import React from 'react'
import img from "../assets/v33_7715.png"
import leaf2 from "../assets/pngwing 14.png"
import one from "../assets/Meal-PNG-Download-Image 2.png"
import two from "../assets/pngfind 1.png"
import three from "../assets/Meal-PNG-Download-Image 1.png"
import pepper from "../assets/pngwing 16.png"
import leaf from "../assets/leaf.png"
import Menu from "../component/menu"
import {
  
  Link,
 
} from "react-router-dom";
import "./home.css"
const home = () => {
  return (
    <div className='intro'>
      <div className="i-left">

<div className="i-name">

  <span> 
 
  It's not just a food</span>
<span>It's a expirence</span>
<span>

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe at inventore iusto cum fugiat! Asperiores saepe recusandae voluptates vitae, alias deserunt quae, quos aperiam id debitis, doloremque beatae aliquam eos?</span>
</div>
  <Link to="contact" smooth={true} spy={true} className='btn'>

<button className='button i-btn'>Our Menu</button>
<button className='button i-btn'>About As</button>

</Link>

 
<img src={leaf} alt="leaf"  className='leaf'/>
      </div>
  



      <div className="i-right">
    <span className='circle'>

</span>
     
      <img src={pepper} alt="" className='pepper'/>
      <img src={img} alt="" className='pizza'/>
<img src={one} alt="" className='one'/>
<img src={two} alt="" className='two'/>
<img src={three} alt="" className='three'/>
<img src={leaf2} alt="" className='three'/>

      </div>

     
    </div>
   
    
  )
}

export default home
