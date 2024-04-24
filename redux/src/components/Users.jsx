import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Deleteuser } from '../store/reducer/userReducer'
function Users() {
    const {users }= useSelector(state=>state.counter)
  const dispatch = useDispatch()
  const Deletehandler = (index)=>{
     dispatch(Deleteuser(index))
  }
  return (
    <div>
        <div className='w-[80vw] h-[10vh] flex items-center justify-center m-auto'>
          <h2 className='text-3xl'>Users List</h2>
        </div>
        <div className='w-[80vw] h-[80vh] bg-red-400 m-auto p-5'>
         
            {users.map((item,index)=>(
                <h2 key={index}><span className='text-base'>{item.id}.  </span> {item.name} <span onClick={()=>Deletehandler(index)} className='ml-2 text-red-700 text-bold'>x</span></h2>
            ))}
        </div>
    </div>
  )
}

export default Users
