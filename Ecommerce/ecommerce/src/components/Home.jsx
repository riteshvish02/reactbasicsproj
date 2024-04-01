import React,{useEffect, useState} from 'react'
import axios from "./axios"

function Home() {
  const [val,setval] = useState([])
const user = async()=>{
  const ans = await axios.get("/users")
  setval(ans.data)
}

useEffect(function(){
  user()
})
  return (
    <div>
       <div className='w-[40vh] mt-10 p-10 m-auto h-fit bg-blue-300 items-center justify-center flex flex-col'>
       {
          val.map((item,i)=>{
            return (
              <div className='text-red flex' key={i}>
                <h1 className='flex'><span className='text-grey'>Name</span> : {item.username}</h1>
              </div>
            )
          })
        }
        
      </div>
    </div>
  )
}

export default Home
