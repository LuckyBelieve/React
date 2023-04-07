import { configureStore }  from '@reduxjs/toolkit'
import { userSlice,counterSlice } from './userSlice'

 export     const store = configureStore({
    reducer:{
        user: userSlice.reducer,
        counter:counterSlice.reducer
    }
 })