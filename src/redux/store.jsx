import { configureStore } from "@reduxjs/toolkit";
import slicereducer from "./slice"
import bgreducer from "./bgslice"
import taskreduser from './todoslice'


const store =configureStore({
    reducer:{
    Red:slicereducer,
    color:bgreducer,
    todo:taskreduser
    }
})
export default store;