import React from 'react'
import "./menu.css"
import { MdOutlineFastfood } from 'react-icons/md';

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
     
    </div>
  )
}

export default menu
