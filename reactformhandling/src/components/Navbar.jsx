import React from 'react'

function Navbar({song}) {
  return (
    <div className='w-full h-20 items-center flex justify-between px-7 bg-orange-200 absolute top-0'>
      <h2 className='text-orange-500 text-xl font-semibold'>Orange</h2>
      <button className='px-7 gap-2 flex py-2 items-center justify-center bg-orange-500 text-white rounded-md'>
        favourites <h2 className='px-2 py-1 rounded-md bg-orange-700'>{song.filter((item,i)=>{ return  item.added == true }).length}</h2>
      </button>
    </div>
  )
}

export default Navbar
