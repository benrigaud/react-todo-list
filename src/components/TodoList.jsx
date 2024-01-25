import { useState, useEffect } from 'react'
import { RenderList } from "./RenderList"

export function TodoList({listTitle}) {

  const [tasks, setTasks] = useState([])
  const [taskInputVal, setTaskInputVal] = useState('')

  useEffect(()=>{
    tasks.length === 10 && console.log('10 elementos!')
  }, [tasks]);

  return(
    <div className="todo-list">

      <h2>{listTitle}</h2>

      <form onSubmit={(e) => {
        e.preventDefault()
        const newElement = e.target.elements.task.value
        newElement !== '' && setTasks(oldTasks => [...oldTasks, newElement])
        setTaskInputVal('')
      }}>

        <input type="text" name="task" required placeholder="Pasear el perro..." value={taskInputVal} onChange={(e)=>{
          setTaskInputVal(e.target.value)
        }}/>
        <input type="submit" value="Agregar" />

      </form>

      <RenderList tasks={tasks}></RenderList>

    </div>
  )
  
}