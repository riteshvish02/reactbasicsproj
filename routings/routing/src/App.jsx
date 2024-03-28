import React from 'react'
import Routing from '../utils/Routing'

import Nav from "./components/Nav"

function App() {
  return (
    <div className='w-full h-screen bg-zinc-200'>
        <Nav/>
        <Routing/>
   
    </div>
  )
}

export default App
