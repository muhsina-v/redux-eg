import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { todo  } from './redux/slice'

function App() {
  const todos=useSelector((state)=>state.Red.red)
  const dispatch=useDispatch()
  //console.log(todos);
  

  return (
    <div>
      <button onClick={()=>dispatch(todo())}
       style={{backgroundColor:todos?"blue":"green"}}>click</button>
    </div>
  )
}

export default App