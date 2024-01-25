import { Task } from "./task"

export function RenderList({tasks}) {
  return(
    <ul className="list">
      {tasks.map((task, index) => (
        <Task key={task + index} name={task} index={index}></Task>
      ))}
    </ul>
  )
}