import { useEffect, useState } from "react";
import PokeImage from "./PokeImage";
import PokeCadenaEvo from "./PokeCadenaEvo";

export default function PokeEvo({pokemon, shiny, mayuscula}){

    const[cadenaEvolutiva, setCadenaEvolutiva] = useState()
    const[primeraEvolucion, setPrimeraEvolucion] = useState([])
    const[segundaEvolucion, setSegundaEvolucion] = useState([])
    const[terceraEvolucion, setTerceraEvolucion] = useState([])


    useEffect( () => {
        
        const getCadenaEvolutiva = async () => {
            const pokemon_species = await fetch(pokemon.species.url).then(data => data.json())
            const evolution_chain = await fetch(pokemon_species.evolution_chain.url).then(data => data.json())

            const datos1era = evolution_chain
            //console.log(datos1era)
            const baseEspecie = await fetch(datos1era.chain.species.url).then(data => data.json())
            const base = await fetch("https://pokeapi.co/api/v2/pokemon/" + baseEspecie.id).then(data => data.json())
            setPrimeraEvolucion([base])

            if (datos1era.chain.evolves_to.length != 0) {
                const datos2nda = datos1era.chain.evolves_to
                datos2nda.map(async (dato2nda) => {
                    const evoEspecie = await fetch(dato2nda.species.url).then(data => data.json())
                    const evo = await fetch("https://pokeapi.co/api/v2/pokemon/" + evoEspecie.id).then(data => data.json())
                    const evoDetails = getEvoDetails(dato2nda.evolution_details)
                    setSegundaEvolucion(prev => [...prev,[evo, evoDetails]])
                    
                    if (dato2nda.evolves_to.length != 0) {
                        const datos3era = dato2nda.evolves_to
                        datos3era.map(async (dato3era) => {
                            const evoEspecie = await fetch(dato3era.species.url).then(data => data.json())
                            const evo = await fetch("https://pokeapi.co/api/v2/pokemon/" + evoEspecie.id).then(data => data.json())
                            const evoDetails = getEvoDetails(dato3era.evolution_details)
                            setTerceraEvolucion(prev => [...prev,[evo, evoDetails]])
                        })


                    }
                })

            }
            setCadenaEvolutiva(evolution_chain)
        }
        if (primeraEvolucion.length == 0) {
           getCadenaEvolutiva() 
        }

    }, [])

    if (cadenaEvolutiva == undefined) {
        return null
    }

    function getEvoDetails(evolution_details) {
        //console.log(evolution_details)

        const evoDetails = evolution_details.filter( evo => {
            if (evo.min_level != null) {
                //console.log({'min_level' : evo.min_level})
                return {min_level : evo.min_level};
            }else if(evo.item != null){
                //console.log(evo.item.name)
                return {item : evo.item.name};
            }else if (evo.min_happiness != null) {
                return {min_happiness : evo.min_happiness};
            }
        } )
        if (evoDetails[0].min_level != null) {
            //console.log({'min_level' : evoDetails.min_level})
            return {min_level : evoDetails[0].min_level};
        }else if(evoDetails[0].item != null){
            //console.log(evoDetails.item.name)
            return {item : evoDetails[0].item.name};
        }else if (evoDetails[0].min_happiness != null) {
            return {min_happiness : evoDetails[0].min_happiness};
        }

    }

    //console.log(primeraEvolucion)
    //console.log(segundaEvolucion)
    //console.log(terceraEvolucion)

    return(
        <>
            <div>
                <PokeCadenaEvo shiny={shiny} primeraEvolucion={primeraEvolucion} segundaEvolucion={segundaEvolucion} terceraEvolucion={terceraEvolucion} mayuscula={mayuscula}></PokeCadenaEvo>
            </div>
        
        </>
    )
}