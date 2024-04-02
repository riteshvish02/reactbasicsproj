import {createContext, useState} from 'react'

export const UserContext = createContext()
function Context(props) {
  const [user,setuser] = useState([
    {id:1,name:"ritesh",age:20},
    {id:2,name:"alen",age:80},
    {id:3,name:"jhon doe",age:50}
  ])
  return (
    <UserContext.Provider value={{user,setuser}}> {props.children} </UserContext.Provider>
   
  )
}

export default Context
