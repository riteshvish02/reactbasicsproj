import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
function Userdets() {
  const {name} = useParams()
  const navigate = useNavigate()
  const navigater = ()=>{
    navigate(-1)
  }
  return (
    <div>
        <hr />
       <div className='w-1/2 mt-10 rounded-md m-auto h-[30vh]  px-5 py-5 '>
        <h1 className=' inline-block py-1 font-bold text-2xl text-red-600'>{name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur molestiae nam, rerum ea distinctio illum aperiam velit quam harum est.</p>
        <button onClick={navigater} className=' px-2 py-1 bg-slate-600 text-white rounded-md'>Go Back</button>
       </div>
    </div>
  )
}

export default Userdets
