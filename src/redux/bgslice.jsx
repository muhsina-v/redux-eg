import { createSlice } from "@reduxjs/toolkit";


const initialState={
    red:true
}

const bgslice=createSlice({
    name:"color",
    initialState,
    reducers:{
        col:(state)=>{
            state.red=!state.red
        }
    }
})
export const {col}=bgslice.actions
export default bgslice.reducer