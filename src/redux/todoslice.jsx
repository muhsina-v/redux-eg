import { createSlice } from "@reduxjs/toolkit";
 
const initialState={
    tasks:[]
}

const taskSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtask:(state,action)=>{
            state.tasks.push(action.payload)
        },
        edittask:(state,action)=>{
            state.tasks[action.payload.index]=action.payload.task
        },
        deletetask:(state,action)=>{
            state.tasks.splice(action.payload,1)

        }
    }
})
export const{ addtask,edittask,deletetask}=taskSlice.action
export default taskSlice.reducer
