import React from 'react'

function Notes({task}) {
  console.log(task)
 return(
  <>
  {task.map((task,index) =>(
        <div key={index}>
          <p>{task}</p>
        </div>
    )
    )
  }
  </>
 )
    
  
}

export default Notes