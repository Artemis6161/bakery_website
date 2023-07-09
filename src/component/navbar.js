import { useState } from "react";
import "./navbar.css"
import {NavItems} from "./navitems"
import {
  
  Link,
 
} from "react-router-dom";

const Navbar = () => {

  const [click, setClick] = useState(false);
  const handleClick =() => setClick(!click);
  const closeMenu =()=> setClick(false);
  
  return (
    
      <nav className="navbarItems">
          <Link  to={"/"} >
          <h1 className="navbar-logo" onClick={closeMenu}>k'backs</h1>
          </Link>
       
        
        
      <div onClick={handleClick} className="menu-icons">
       
        {click ? <i className="fas fa-times" ></i>:
         <i className="fas fa-bars" ></i>}

      
        
        
        </div>
        
        
        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
        {NavItems.map((item,index)=>{
    return(
     <li key={index}  className='nav-item'>
     <Link className={item.cname} to={item.url} onClick={closeMenu}>
   
<i className={item.icons}></i>   {item.title}
</Link>
      </li>
    );
    
    })}
    <Link  to={"/signup"} >
    <button>Sign Up</button>
    </Link>
        
        
        </ul> 
        {/* </div> */}
      </nav>

  )
}

export default Navbar
