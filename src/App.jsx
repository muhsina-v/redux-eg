import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { todo  } from './redux/slice'

function App() {
  const todos=useSelector((state)=>state.Red.red)
  const dispatch=useDispatch()
  console.log(todos);
  

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: todos ? 'blue' : 'green',
      transition: 'background-color 0.5s ease-in-out'
    }}>      
      <button onClick={()=>dispatch(todo())}
      //  style={{backgroundColor:todos?"blue":"green"}}
      >click</button>
    </div>

    
  )
}

export default App