import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getasyncproducts} from '../store/actions/productaction'
const Products = () => {
const dispatch = useDispatch()
const {products} = useSelector(state=> state.products)

useEffect(()=>{
    dispatch(getasyncproducts())    
})
//   console.log(products);
  return (
   
    <div>
      <div className='w-[80vw] h-[10vh] flex items-center justify-center m-auto'>
          <h2 className='text-3xl'>products List</h2>
        </div>
        <div className='w-[80vw] h-[80vh] bg-red-400 m-auto p-5'>
         
            {products.map((item,index)=>(
                <h2 key={index}><span className='text-base'>{item.id}.  </span> {item.title} <span onClick={()=>{}} className='ml-2 text-red-700 text-bold'>x</span></h2>
            ))}
        </div>
    </div>
  )
}

export default Products
