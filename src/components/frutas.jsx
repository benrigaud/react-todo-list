export function ListaFrutas({frutas}) {
  return(
    <ul>
      {
        frutas.map((fruta) =>(
          <li key={fruta}>{fruta}</li>
        ))
      }
    </ul>
  )
}