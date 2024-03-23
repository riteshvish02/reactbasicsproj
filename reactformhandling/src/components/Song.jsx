import React from "react";

function Song({song,index,add}){
  const {name,added,img,artist} = song;
  return(
    <div className="w-48 m-3 h-24 mt-0 inline-block bg-zinc-600 rounded-md  relative">
      <div className="flex ">
      <img className="w-16 h-16 m-2 object-cover bg-black" src={img} alt="" />
     <div className="flex flex-col">
     <h2 className="text-white mt-2 text-xl">{name}</h2>
      <h2 className="text-white mt-1 text-sm">{artist}</h2>
     </div>
      </div>
      <button onClick={()=>{add(index)}} className={`w-[80%] ml-5 text-white text-sm font-medium bottom-[-15%] h-1/3 ${!added ? "bg-orange-500" : "bg-green-400"} absolute rounded-full`}>
        {added == false ? "Add to fav" : "Added"}
      </button>
    </div>
  )
}

export default Song;