import React,{useEffect} from 'react'

function Contact() {
    useEffect(() =>{
        console.log("created");
        return () => {
            console.log("destroyed");
        }
    })
  return (
    <div>
       <div className='w-[40vh] h-[50vh] bg-blue-300 items-center justify-center flex'>
        <h1>Contact</h1>
       </div>
    </div>
  )
}

export default Contact
