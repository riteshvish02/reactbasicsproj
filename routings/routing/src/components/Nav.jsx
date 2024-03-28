import React from 'react'
import {Link,NavLink} from "react-router-dom"

function Nav() {
  return (
    <div>
       <nav className='w-full h-[10vh] bg-blue-300 flex items-center justify-center gap-4 px-5'>
        <Link to="/">
          home
        </Link>
        <NavLink
         className={(e)=>{
                return [
                e.isActive? "text-green-600" : "",
                e.isActive? "font-bold" : "",
                ].join(" ");
              }
         }
         to='/about'>
          About
        </NavLink>
        <NavLink 
        style={(e)=>{
           if(e.isActive ){
             return {
               color: "green",
               fontWeight:700,
             }
           }
        }}
         to='/user'>
          User
        </NavLink>
      </nav>
    </div>
  )
}

export default Nav
