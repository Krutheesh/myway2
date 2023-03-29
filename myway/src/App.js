import React from 'react'
import { useState } from 'react'
import "./index.css"
import Notes from './components/notes'
import Navbar from './components/Navbar'
function App() {
  const [note , setNote] = useState()
  const [text, setText] = useState()
const [task, upateTask] = useState([])
  const formHandler = (e) => {
    e.preventDefault()
    if (text !== undefined){
      setNote(text)
      upateTask([...task,text])
      console.log(task)
      
    }
    else{
      alert("enter note" )
    }


  }
  return (
    <>
    <div className='form'>
      <Navbar/>
    <div className='d'>
    <form action="
    " onSubmit={(e) => {formHandler(e)}}>
        <textarea name="" id="" cols="20" rows="5" onChange={(e) => setText(e.target.value)}>
        </textarea>
      
      <button className=''>submit</button>

    </form>
    </div>
    </div>
    


    <section>
      {task !==[] ?
        <Notes task={task}/>: ""
        }

    </section>
    </>
  )
}

export default App