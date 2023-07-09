import React from 'react'
import "./menu.css"
import { MdOutlineFastfood } from 'react-icons/md';
import image1 from '../assets/cake.png'
import image2 from '../assets/sandwich.png'
import image3 from '../assets/burger.png'
import image4 from '../assets/pizza.png'
import pizza1 from '../assets/pizza 1 menu.png'
import pasta from '../assets/pasta-menu.png'
import fruity from '../assets/Fruity-Chocolate-Cake-menu.png'
const menu = () => {
  return (
    <div classname="menu">
    <div className='icon'>
    <MdOutlineFastfood/>
     <span className='our-menu'>Our Menu</span>

    </div>
    <h1>
    Eat Fresh & Healthy
    </h1>
    <div className='image1'>
    
    <img src={image1} alt="" />
     <span className='our'>Cake & pastries</span>


   
    <img src={image2} alt="" />
     <span className='our'>sandwich</span>

   
    
    <img src={image3} alt="" />
     <span className='our'>Burger</span>

  
   
    <img src={image4} alt="" />
     <span className='our'>Pizza</span>

   
    </div>
   <div className='main-card'>
   <div >
    <img src={pizza1} alt="pizza" />
    <div className="card">
    <h3>Chicken Pizza</h3>
    <p>“Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken”</p>
    <span>Rs. 149</span>
   </div>
   </div>
   <div >
    <img src={pasta} alt="pasta" />
    <div className="card">
    <h3>Pasta</h3>
    <p>“Penne pasta in tomato sauce with skinless chicken, pea sprouts, balsamic vinegar, red pepper”</p>
    <span>Rs. 149</span>
   </div>
   </div>
   <div >
    <img src={fruity} alt="fruity" />
    <div className="card">
    <h3>Fruity Chocolate Cake</h3>
    <p>“Chocolate fudge buttercream swirls, fresh raspberries & strawberries, apricot preserves, mint leaves”</p>
    <span>Rs. 149</span>
   </div>
   </div>
   </div>
    </div>
  )
}

export default menu
