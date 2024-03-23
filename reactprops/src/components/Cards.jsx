import React from 'react'
import Card from './Card'

function Cards({user,remove}) {
  return (
    <div className='w-full h-[30vh] min-h-50vh overflow-auto flex-wrap flex items-center justify-center pt-4 pl-4  bg-blue-300'>
        {user.map((item,i)=>{
            return (
                <Card user={item} key={i} remove={remove} index={i}/>
            )
        })}
      
    </div>
  )
}

export default Cards
