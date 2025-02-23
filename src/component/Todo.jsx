import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

function Todo() {
    const Dispatch=useDispatch();
    const tasks=useSelector(stete=>state.todo.tasks)
    const {task,settask}=useState("");
    const {is}

  return (
    <div>Todo</div>
  )
}

export default Todo