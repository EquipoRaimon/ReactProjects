/*
import { useEffect, useState } from "react";
import PokeImage from "./PokeImage";

export default function PokeEvo({pokemon, shiny}){

    const[cadenaEvolutiva, setCadenaEvolutiva] = useState()
    const[primeraEvolucion, setPrimeraEvolucion] = useState()
    const[segundaEvolucion, setSegundaEvolucion] = useState()
    const[terceraEvolucion, setTerceraEvolucion] = useState()

    useEffect( () => {
        const getCadenaEvolutiva = async () => {
            const pokemon_species = await fetch(pokemon.species.url).then(data => data.json())
            const evolution_chain = await fetch(pokemon_species.evolution_chain.url).then(data => data.json())
            await Promise.resolve(evolution_chain).then(value => setCadenaEvolutiva(value));
        }
        getCadenaEvolutiva()
    }, [pokemon])

    if (cadenaEvolutiva == undefined) {
        return <></>
    }

    //Así sería el componente imagen <PokeImage pokemon={base} shiny={shiny}/>
    //console.log()

    const primeraEvo = []
    const segundaEvo = []
    const terceraEvo = []

    async function generarEvolucion(){

        const datos1era = cadenaEvolutiva
        //console.log(datos1era)
        const baseEspecie = await fetch(datos1era.chain.species.url).then(data => data.json())
        const base = await fetch("https://pokeapi.co/api/v2/pokemon/" + baseEspecie.id).then(data => data.json())
        primeraEvo.push(base)
        
        if (datos1era.chain.evolves_to.length != 0) {
            const datos2nda = datos1era.chain.evolves_to
            datos2nda.map(async (dato2nda) => {
                const evoEspecie = await fetch(dato2nda.species.url).then(data => data.json())
                const evo = await fetch("https://pokeapi.co/api/v2/pokemon/" + evoEspecie.id).then(data => data.json())
                segundaEvo.push(evo)
                
                if (dato2nda.evolves_to.length != 0) {
                    const datos3era = dato2nda.evolves_to
                    datos3era.map(async (dato3era) => {
                        const evoEspecie = await fetch(dato3era.species.url).then(data => data.json())
                        const evo = await fetch("https://pokeapi.co/api/v2/pokemon/" + evoEspecie.id).then(data => data.json())
                        terceraEvo.push(evo)
                    })


                }
            })

        }
    }
    generarEvolucion()
        
        //console.log("primera")
        console.log(primeraEvo)

        //console.log("segunda")
        console.log(segundaEvo)
        //console.log("tercera")
        console.log(terceraEvo)
    
    return(
        <>
            <div>

            </div>
        
        </>
    )
}
*/




/*
import { useEffect, useState } from "react";
import PokeImage from "./PokeImage";
import PokeCadenaEvo from "./PokeCadenaEvo";

export default function PokeEvo({pokemon, shiny}){

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
            const segundaEvo = []
            const terceraEvo = []
            if (datos1era.chain.evolves_to.length != 0) {
                const datos2nda = datos1era.chain.evolves_to
                datos2nda.map(async (dato2nda) => {
                    const evoEspecie = await fetch(dato2nda.species.url).then(data => data.json())
                    const evo = await fetch("https://pokeapi.co/api/v2/pokemon/" + evoEspecie.id).then(data => data.json())
                    segundaEvo.push(evo)
                    
                    if (dato2nda.evolves_to.length != 0) {
                        const datos3era = dato2nda.evolves_to
                        datos3era.map(async (dato3era) => {
                            const evoEspecie = await fetch(dato3era.species.url).then(data => data.json())
                            const evo = await fetch("https://pokeapi.co/api/v2/pokemon/" + evoEspecie.id).then(data => data.json())
                            terceraEvo.push(evo)
                        })


                    }
                })

            }
            setSegundaEvolucion(segundaEvo)
            setTerceraEvolucion(terceraEvo)
            setCadenaEvolutiva(evolution_chain)
        }
        if (primeraEvolucion.length == 0) {
           getCadenaEvolutiva() 
        }

    }, [])

    if (cadenaEvolutiva == undefined) {
        return null
    }

    //console.log(primeraEvolucion)
    console.log(segundaEvolucion)
    //console.log(terceraEvolucion)
    //console.log(terceraEvolucion.length)
    //Así sería el componente imagen <PokeImage pokemon={base} shiny={shiny}/>

    
    return(
        <>
            <div>
                <PokeCadenaEvo shiny={shiny} primeraEvolucion={primeraEvolucion} segundaEvolucion={segundaEvolucion} terceraEvolucion={terceraEvolucion}></PokeCadenaEvo>
            </div>
        
        </>
    )
}
*/