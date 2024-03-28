import React from 'react'
import {Link,Outlet} from "react-router-dom"
function User() {
  return (
    <div>
     <div className='w-1/2 mt-2 rounded-md m-auto h-[20vh] flex flex-col items-start gap-2 px-5 py-5 '>
      <Link className='px-5 py-1 rounded-md bg-red-400' to='/user/ritesh'>Ritesh</Link>
       <Link className='px-5 py-1 rounded-md bg-red-400'  to='/user/Kishan'>Kishan</Link>
       <Link className='px-5 py-1 rounded-md bg-red-400'  to='/user/sunny'>Sunny</Link>
       
       </div>
      
       <Outlet/>
    </div>
  )
}

export default User
