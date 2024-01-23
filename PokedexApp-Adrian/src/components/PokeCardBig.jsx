import { useState } from 'react'
import PokeImage from './PokeImage'

export default function PokeCardSmall({pokemon, setPokemon, shiny}){

    const [vista, setVista] = useState(1)

    function handleClick(){
        setPokemon()
    }

    if(!pokemon){
        return <></>
    }

    return(
        <>
            <div className="card w-50 mx-auto mt-5">

                <div className='boton-volver ms-2 mt-2'>
                    <img src='../src/assets/atras.svg'  onClick={handleClick}/>

                </div>

                <div className="mx-auto">
                    
                    <PokeImage pokemon={pokemon} shiny={shiny}/>
                    
                </div>
                <div className="mx-auto">
                    <h5 className="">{"#"+pokemon.id}</h5>
                    <p className="">{pokemon.name}</p>
                    {
                        pokemon.types.map((poke)=>{
                            <p>{poke.type.name}</p>
                        })
                    }
                    
                </div>
            </div>
        </>
    )
        
}