import { useEffect, useState } from "react";

export default function PokeEvo({pokemon}){

    const[cadenaEvolutiva, setCadenaEvolutiva] = useState()

    useEffect( () => {
        const getCadenaEvolutiva = async () => {
            const pokemon_species = await fetch(pokemon.species.url).then(data => data.json())
            const evolution_chain = await fetch(pokemon_species.evolution_chain.url).then(data => data.json())
            await Promise.resolve(evolution_chain).then(value => setCadenaEvolutiva(value));
        }
        getCadenaEvolutiva()
    }, [])

    //console.log(cadenaEvolutiva)
    //Al principio sale undefined

if (cadenaEvolutiva != undefined) {
    return(
        <p>{cadenaEvolutiva.id}</p>
    )
}
    

}