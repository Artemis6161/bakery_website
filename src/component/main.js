import React from 'react'
import Navbar from './navbar'
import Home from "./home"
import Menu from "./menu"
import Gallery from "./gallery"
import About from "./about"
import Contact from "./contact"
import Signup from "./signup"

const main = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Home/>
      <Menu/>
    </div>
  )
}

export default main
