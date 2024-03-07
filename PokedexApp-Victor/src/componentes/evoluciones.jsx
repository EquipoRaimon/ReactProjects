import React, { useEffect } from 'react';


export default function Evoluciones({ pokemito, evo, setevo }) {
  useEffect(() => {
    const getEvolucion = async () => {
      fetch("https://pokeapi.co/api/v2/pokemon-species/" + `${pokemito.name}` + "/")
      .then((response) => response.json())
      .then((data) => {
        fetch(`${data.evolution_chain.url}`)
          .then((response) => response.json())
          .then((dataFinal) => {
            setevo(dataFinal)
            console.log(dataFinal);
          })
      })
    }
    getEvolucion()
  }, [])

  return (
    <div>
      <h1>Evoluciones:</h1>
      <ul>
        
      </ul>
    </div>
  )
}