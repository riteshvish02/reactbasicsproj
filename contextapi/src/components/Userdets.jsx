import React, { useContext } from 'react'
import { UserContext } from '../context/Context'
import {  useNavigate, useParams } from 'react-router-dom'

function Userdets() {
    const {user} = useContext(UserContext)
    const {id} = useParams()
    const navigate = useNavigate()
    const navigator = ()=>{
        navigate(-1)
    }
  return (
    <div>
      <div className='w-full h-screen flex items-center justify-center'>
           <div className='w-44 h-44 bg-slate-500 pl-3'>
           <h2>Name : {user[id].name}</h2>
           <h2>age : {user[id].age}</h2>
           </div>
           <button onClick={navigator} className='px-3 py-2 bg-red-400'>Back</button>
      </div>
    </div>
  )
}

export default Userdets
