import { createSlice } from "@reduxjs/toolkit";

const initialState={
     red:true
}

export const slice=createSlice({
    name:"Red",
    initialState,
    reducers:{
        todo:(state)=>{
            state.red=!state.red
            
        }
    }
})
export default slice.reducer
export const {todo} =slice.actions