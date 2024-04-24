import { configureStore } from '@reduxjs/toolkit'
import userSlice from './reducer/userReducer'
import productSlice  from './reducer/productsReducer'
export const store = configureStore({

    reducer: {
        counter:userSlice,
        products:productSlice,
    },
  })