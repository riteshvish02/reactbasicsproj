import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';
import Cards from './components/Cards';
import Form from './components/Form';

function App() {

  const [user,setuser] = useState([])   
  const handleFormdets = (data)=>{
    setuser([...user,data])
  }

  const remove = (i)=>{
     setuser(()=>user.filter((item,index)=> index !== i))
  }
  return (
    <div className='p-24 w-full min-h-[100vh] bg-slate-300 items-center justify-center flex flex-col'>
      <Cards user={user} remove={remove}/>
      <Form hndleform={handleFormdets}/>
    </div>
  )
}

export default App
