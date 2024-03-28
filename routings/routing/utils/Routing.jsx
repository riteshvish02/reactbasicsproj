import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from "../src/components/Home"
import About from "../src/components/About"
import User from "../src/components/User"
import Userdets from '../src/components/Userdets'
function Routing() {
  return (
    <div>
         <Routes>
            <Route path="/user" element={<User/>}>
                <Route path="/user/:name" element={<Userdets/>} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default Routing
