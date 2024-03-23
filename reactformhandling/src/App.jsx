import React ,{useState} from "react";
import Card from "./components/Props";
import Navbar from "./components/Navbar";
import Song from "./components/Song";

function App(){
    const data = [
        {name:"ritesh", age:25 ,frnd:true,prof:"dancer",img:"https://images.unsplash.com/photo-1677131619088-81c39aeef242?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"},
        {name:"shubham", age:5 ,frnd:false,prof:"student",img:"https://images.unsplash.com/photo-1605289628799-87077c2f0404?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D"},
        {name:"Aj", age:50 ,frnd:true,prof:"teacher",img:"https://images.unsplash.com/photo-1620456456327-264dbf934b06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"},
        
    ]
   const [det,setdet] = useState(data)
   const handlebtn = (i)=>{
     setdet((prev)=>{
        return prev.map((item,index)=>{
            if(index == i){
                return {...item,frnd:!item.frnd}
            }else{
                return item
            }
        })
    })
   }

  const songdata = [
    {name:"jai ho",artist:"Ar rehman",added:false,img:"https://plus.unsplash.com/premium_photo-1706800175702-6827f24341ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8"},
    {name:"beleiver",artist:"Ritesh",added:false,img:"https://images.unsplash.com/photo-1710781189469-55afea4e6bcd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"No love",artist:"kishan",added:false,img:"https://images.unsplash.com/photo-1710768939548-0b3bd361a2d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Teri mitti",artist:"arjit",added:false,img:"https://images.unsplash.com/photo-1710821941906-2503b0c6ff57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"},
  ];

  const [songdet,setsongdet] = useState(songdata)
   const added = (i)=>{
       setsongdet((prev)=>{
           return prev.map((item,index)=>{
               if(index == i){
                   return {...item,added:!item.added}
               }else{
                   return item
               }
           })
       })
   }
   return (
    <>
    
    <div className="w-full h-screen bg-zinc-400 items-center justify-center gap-5 flex">
        {det.map((items, i) =>(
            <Card handle={handlebtn} index={i} key={i} item={items}  /> 
        ))}
      
    </div>
    <div className="w-full h-screen relative">
        <Navbar song={songdet} />
        <div className="w-full h-screen pt-32 bg-zinc-200  ">
            {songdet.map((song, i) =>{ 
                return(
                    <Song key={i} index={i} song={song}  add={added} />
                )
            })}
        
    </div>
    </div>
    </>
   )
}

export default App;