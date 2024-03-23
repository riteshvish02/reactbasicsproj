import React from 'react'

function Card({user,index,remove}) {
  return (
    <div className='w-[25vh] h-[25vh] min-h-[25vh] rounded-md bg-green-300 m-2 flex flex-col items-center pt-2'>
       <img className='w-16 h-16 bg-black rounded-full object-cover' src={user.img} alt="" />
       <h2 className='font-semibold'>{user.name}</h2>
       <h2 className='font-semibold text-sm leading-none text-slate-700 opacity-[0.8]'>{user.email}</h2>
       <h5 className='text-xs font-medium text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing.</h5>
       <button onClick={()=>{remove(index)}} className='px-3 py-1 m-2 bg-red-500 rounded-md text-white'>remove</button>
    </div>
  )
}

export default Card
