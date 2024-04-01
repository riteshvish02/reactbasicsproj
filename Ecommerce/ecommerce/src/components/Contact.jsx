import React,{useEffect, useState} from 'react'

function Contact() {
  const [first,setfirst] = useState("this is a small data")
  const [second,setsecond] = useState("this is a large data")
    useEffect(() =>{
        console.log("created");
        return () => {
            console.log("destroyed");
        }
    },[second])
  return (
    <div>
       <div className='w-[40vh] h-[50vh] bg-blue-300 items-center justify-center flex flex-col'>
        <h1>Contact</h1>
        <h2>{first}</h2>
        <button className='px-2 py-1 bg-black rounded-md text-white' onClick={()=>{setfirst("small data changed")}}> change small data</button>

        <h2>{second}</h2>
        <button className='px-2 py-1 bg-black rounded-md text-white' onClick={()=>{setsecond("large data changed")}}> change small data</button>
     
       </div>
    </div>
  )
}

export default Contact
