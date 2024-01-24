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

    function setColor(){
        const types = pokemon.types
        const color = types[0].type.name

        const colores = {
            grass : {backgroundColor: '#49d0b0'},
            water : {backgroundColor: '#76befe'},
            fire : {backgroundColor: '#fa6d6b'}, 
            electric : {backgroundColor: '#F8D030'}, 
            normal : {backgroundColor: '#A8A77A'}, 
            poison : {backgroundColor: '#A33EA1'}, 
            bug : {backgroundColor: '#A6B91A'}, 
            fairy : {backgroundColor: '#D685AD'}, 
            flying : {backgroundColor: '#A98FF3'}, 
            ground : {backgroundColor: '#E2BF65'}, 
            rock : {backgroundColor: '#B6A136'}, 
            dark : {backgroundColor: '#705746'}, 
            ghost : {backgroundColor: '#735797'}, 
            dragon : {backgroundColor: '#6F35FC'}, 
            psychic : {backgroundColor: '#F95587'}, 
            ice : {backgroundColor: '#96D9D6'}, 
            fighting : {backgroundColor: '#C22E28'}, 
            steel : {backgroundColor: '#B7B7CE'},
            shadow : {backgroundColor: '#212F3D'}, 
            unknown : {backgroundColor: '#black'}
        }

        return colores[color]
    }

    return(
        <>
            <div className="card w-50 mx-auto mt-5" style={setColor()}>

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
                            return(
                               <p>{poke.type.name}</p> 
                            )
                            

                        })
                    }
                    
                </div>
            </div>
        </>
    )
        
}