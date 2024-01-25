export function Task({name, index}) {
  return(
    <li key={index}>{name}</li>
  )
}