import React, { useState } from 'react'
 import axios from 'axios'
import Nav from "./components/Nav"
function App() {
  const [val,setval] = useState([])
 const call = async()=>{
 var ans =  await axios.get('https://fakestoreapi.com/products')
    // console.log(setval);
    setval(ans.data)
    console.log(ans.data);

 }

 const postme = async ()=>{
  const data =  await axios.post('https://fakestoreapi.com/products',
  
        {
            title: 'test product',
            price: 13.5,
            description: 'lorem ipsum set',
            image: 'https://plus.unsplash.com/premium_photo-1711581810682-945e9ab90dd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8',
            category: 'Households'
        }
    
    )
    
 }
  return (
    <>
    <div className='w-full h-screen bg-slate-400'>
      <Nav></Nav>
    </div>
    <div className='w-full h-fit flex gap-3 p-10'>
    <button  className='px-3 py-2 bg-red-500 rounded-md ' onClick={call}>show products</button>
    {/* <button  className='px-3 py-2 bg-red-500 rounded-md ' onClick={postme}>post product</button> */}
    </div>
    <hr />
    <div className='w-full h-fit p-10'>
      <h2>Products:</h2>
     <ul  className='flex flex-wrap '>
     {val.length > 0 ?
     val.map((val,index)=>{
       return <div className='w-[40vh] px-2 py-2 h-fit rounded-md m-2 bg-red-300' key={index}>
          <h1><span className='px-3 py-1 text-white'>Title:</span><span className='text-xs leading-none'>{val.title}</span></h1> 
          <div className='w--full h-fit flex items-center'>
          <div className='w-[15vh] h-[15vh] rounded-md overflow-hidden flex items-center'>
           <img className='w-full h-full object-cover object-center' src={val.image} alt="" />
           </div>
           <h2 className='ml-3'><span className='text-white'>Price :</span> {val.price}</h2>
          </div>
          
        </div>
       
     }) : 
     <h2>
      loading....
     </h2>
     } 
    
      
     </ul>
    </div>
    </>
  )
}

export default App
