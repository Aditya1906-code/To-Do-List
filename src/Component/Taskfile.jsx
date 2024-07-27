import React from 'react'
import Lists from './Lists'

function Taskfile({list,delTodo}) {
  return (
    <div className='container'>
        {list.map((task,index)=>{
            return (
                <Lists task={task} delTodo={delTodo} index={index} />
            )
        })}

    </div>
  )
}

export default Taskfile