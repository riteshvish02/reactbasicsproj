import React from 'react';

function Card({item,handle,index}){
  const {name,prof,age,frnd,img} = item;
 return(
  <div className='w-[13vw] h-[35vh] rounded-md overflow-hidden bg-black'>
      <div className='w-full h-1/2 bg-white'>
        <img className='w-full h-full object-cover object-center' src={img} alt="" />
      </div>
      <div className='w-full h-1/2 text-white px-3 pt-2'>
        <h2>name : {name}</h2>
        <h2>prof : {prof}</h2>
        <h2>age  : {age}</h2>
        <button onClick={()=>handle(index)} className={`px-2 py-1 rounded-md bg-blue-500 mt-2 ml-9`}>
          {frnd === false ? "add frnd" : "remove"}
          </button>
      </div>
  </div>
 ) 
}

export default Card;