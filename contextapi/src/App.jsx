import React from 'react'
import {Routes,Route,Link} from "react-router-dom"
import User from "./components/User"
import Home from "./components/Home"
import About from "./components/About"
import Userdets from "./components/Userdets"


function App() {
  return (
    <div>
      <nav className='w-full h-24 items-center justify-center gap-10 flex bg-green-500'>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
        <Link to="/dets">user</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dets" element={<User />} />
        <Route path="/dets/:id" element={<Userdets />} />
      </Routes>
      
    </div>
  )   
}

export default App
