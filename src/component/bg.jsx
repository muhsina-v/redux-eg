import React from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import {col} from "../redux/bgslice"


function Bg() {
    const dispatch=useDispatch();
    const select=useSelector((state)=>state.color.red)

  return (
    <div>
        <button style={{backgroundColor:select?"blue":"red"}}
        onClick={()=>dispatch(col())}>cliccccccccccc</button>

    </div>
  )
}

export default Bg;