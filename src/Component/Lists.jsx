import React from 'react'

function Lists({task,delTodo,index}) {
  return (
    <div className='todo'>
    <p>{task} </p>
        <div className='action'>
        <input type="checkbox" />
        <button onClick={()=>(delTodo(index))}>Delete</button>
        </div>
    </div>
  )
}

export default Lists