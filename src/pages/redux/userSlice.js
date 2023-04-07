import { createSlice } from '@reduxjs/toolkit'

 const initialState= {value:""}
 export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{  
        login:(state,action)=>{
            state.value = action.payload
        },
        logout:(state)=>{
            state.value = initialState.value
        }
    }
 });
 export const { login,logout } = userSlice.actions
