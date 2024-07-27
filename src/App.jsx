import React,{useState} from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Taskfile from './Component/Taskfile'
import Todo from './Component/Todo'

function App() {

  
  const[todo,setTodo]=useState('')
  const[list,setList]=useState([])

  function writeText(e){
    setTodo(e.target.value)
    console.log(e)

  }

  function addTodo(){
    if({todo}!='')
     setList((prvTodo)=>[...prvTodo,todo])
      setTodo('')
  }
  console.log(list)

  function delTodo(index){
    setList((prvTodo) => prvTodo.filter((prvTodo,prvTodoindex)=>{
      return prvTodoindex!=index
    })
  )}

  return (
    <main>
      <h1>To do List</h1>
      <Todo  todo={todo}  writeText={writeText} addTodo={addTodo}/>
      <Taskfile list={list} delTodo={delTodo}/>




    </main>
      
  )
}

export default App
