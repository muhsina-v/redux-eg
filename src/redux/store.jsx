import { configureStore } from "@reduxjs/toolkit";
import slicereducer from "./slice"


const store =configureStore({
    reducer:{
    Red:slicereducer
    }


})

export default store;