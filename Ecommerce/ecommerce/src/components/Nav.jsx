import React from 'react'
import {Link,Routes,Route} from "react-router-dom"
import Home from "./Home"
import Prod from "./Prod"
import Contact from "./Contact"
import About from "./About"

function Nav() {
  return (
   <>
    <div className='w-full h-12 justify-center   bg-green-400 flex items-center gap-2'>
       <Link to="/home">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/">Contact</Link>
       <Link to="/show">show</Link>
    </div>
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Contact />} />
        <Route path="/show" element={<Prod />} />
    </Routes>
   </>
  )
}

export default Nav
