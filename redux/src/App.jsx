import React, { useState } from 'react'

import { Link, Routes ,Route} from 'react-router-dom'
import Home from './components/Home'
import Users from './components/Users'
import Products from './components/Products'
const App = () => {

  // console.log(users);
  return (
    <div>
      <div className='w-full h-screen'>
        <nav className='w-full  h-[8vh] bg-green-400 flex items-center justify-center gap-2'>
          <Link to='/'>Home</Link>
          <Link to='/users'>Users</Link>
          <Link to='/products'>products</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/products' element={<Products />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
