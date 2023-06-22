import React from 'react'
import {NavItems} from "./navitems"
// import logo from "../assets/logo"
import {
  
  Link,
 
} from "react-router-dom";
const Navbar = () => {
  return (
   <nav className="navItems">
   <Link to={"/"}>
   {/* <img className="navbar-logo" src={logo}/> */}
    <h1>Licera Kitchen</h1> 
   </Link>





     
<ul  >
        {NavItems.map((item,index)=>{
    return(
     <li key={index}  >
     <Link  to={item.url}>
   
   {item.title}
</Link>
      </li>
    );
    
    })}
    <Link  to={"/signup"}>
    <button>Sign Up</button>
    </Link>
        
        
        </ul> 

   </nav>
  )
}

export default Navbar;
