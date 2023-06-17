import React from 'react'

import Home from "./component/home"
import Gallery from "./component/gallery"
import About from "./component/about"
import Contact from "./component/contact"
import Signup from "./component/signup"
import "../src/App.css"
import {
  createBrowserRouter,
 
  RouterProvider,
 
} from "react-router-dom";


const App = () => {
  return (
    <div className='app'>
     
     
      <RouterProvider basename="/my-bakery" router={router} />
    </div>
  )
}
const router = createBrowserRouter([
  {
     path: "/my-bakery",
    element:  
   <Home/>
  
   
  },
  {
    path: "/about",
    element:  
   <About/>
   
  },
  {
    path: "/gallery",
    element:  
   <Gallery/>
   
  },
 
  {
    path: "/contact",
    element:  
   <Contact/>
   
  },
  {
    path: "/signup",
    element:  
   <Signup/>
   
  },
]);
export default App;