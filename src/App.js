import React from 'react'

import Home from "./component/home"
import Gallery from "./component/gallery"
import About from "./component/about"
import Contact from "./component/contact"
import Signup from "./component/signup"
import Menu from "./component/menu"
import Navbar from './component/navbar'
import "../src/App.css"
import {
  
  Routes,
  Route,
  BrowserRouter,
 
} from "react-router-dom";


const App = () => {
  return (
    <div className='app'>
     
    <BrowserRouter>
      <Navbar />
      <Routes>
      
       
          <Route path="/" element={<Home/>}></Route>
         
          <Route path="/about" element={<About/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/gallery" element={<Gallery/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
       
        </Routes>
   
      </BrowserRouter>
  
    </div>
  )
}
// const router = createBrowserRouter([
//   {
//      path: "/my-bakery",
//     element:  
//    <Home/>
  
   
//   },
//   {
//     path: "/about",
//     element:  
//    <About/>
   
//   },
//   {
//     path: "/gallery",
//     element:  
//    <Gallery/>
   
//   },
 
//   {
//     path: "/contact",
//     element:  
//    <Contact/>
   
//   },
//   {
//     path: "/menu",
//     element:  
//    <Menu/>
   
//   },
//   {
//     path: "/signup",
//     element:  
//    <Signup/>
   
//   },
// ]);
export default App;