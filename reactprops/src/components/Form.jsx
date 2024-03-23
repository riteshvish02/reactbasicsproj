import React from 'react'
import { useForm } from 'react-hook-form'

function Form({hndleform}) {
    const {register,handleSubmit,reset} = useForm();
    const formcall = (data)=>{
        hndleform(data)
        reset()
    }
  return (
    <div className='w-full h-[20vh] items-center flex justify-center'>
      <form className=' flex gap-2 ' action="" onSubmit={handleSubmit(formcall)}>
        <input {...register("name")}  className='outline-none rounded-md pl-2  text-black text-sm py-1' type="text" placeholder='name' />
        <input {...register("email")} className='outline-none rounded-md pl-2  text-black text-sm py-1' type="email" placeholder='email' />
        <input {...register("img")} className='outline-none rounded-md pl-2  text-black text-sm py-1' type="text" placeholder='image' />
        <input   className='px-2 py-1 text-white bg-green-500 rounded-md' type="submit" />
      </form>
    </div>
  )
}

export default Form
