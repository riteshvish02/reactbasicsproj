import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/Context'

function User() {
  const {user,setuser} = useContext(UserContext)
  console.log(user);
  return (
    <div>
    <div className='w-full h-screen bg-black flex flex-col p-10'>
      <h2 className='text-white font-3xl'>User Lists</h2>
      
      <div className='w-24 h-fit mt-10 flex flex-col gap-2'>
        {user.map((user, i) =>{
          return (
            <Link className='w-fit whitespace-nowrap px-3 py-2 bg-red-300 rounded flex' to={`/dets/${user.id}`}>
              <div className=' flex gap-2'>
                <h2><span className='text-white'>Name</span> {user.name}</h2>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
    </div>
  )
}

export default User
