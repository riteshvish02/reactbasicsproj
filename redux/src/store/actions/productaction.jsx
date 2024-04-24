import axios from 'axios'
import { getproducts } from '../reducer/productsReducer'

export const getasyncproducts = ()=>(dispath,getState)=>{
    console.log(getState());
    axios.get('https://fakestoreapi.com/products').then((res)=>{
        dispath(getproducts(res.data))
    }).catch((err)=>{
        console.log(err);
    })
}