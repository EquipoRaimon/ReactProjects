import PokeImage from "./PokeImage"
 
export default function PokeCadenaEvo({shiny, primeraEvolucion, segundaEvolucion, terceraEvolucion, mayuscula }){
    if (segundaEvolucion.length == 0 && terceraEvolucion.length == 0) {
        return(
            <>
                <p className="text-center ">Este pokemon no evoluciona</p>
            </>
        )
    }
 //<img className="pokeimg" src="../src/assets/fecha_pokemon.png"/>
    if (segundaEvolucion.length == 1 && terceraEvolucion.length == 1) {
        return(
            <div className="text-center py-1">
                <PokeImage pokemon={primeraEvolucion[0]} shiny={shiny}/>
                <p><span className='fw-bold'>{"#"+primeraEvolucion[0].id}</span> {mayuscula(primeraEvolucion[0].name)}</p>
                <img className="flecha d-block mx-auto pb-1" src="../src/assets/fecha_pokemon.png"/>
                <PokeImage pokemon={segundaEvolucion[0]} shiny={shiny}/>
                <p><span className='fw-bold'>{"#"+segundaEvolucion[0].id}</span> {mayuscula(segundaEvolucion[0].name)}</p>
                <img className="flecha d-block mx-auto pb-1" src="../src/assets/fecha_pokemon.png"/>
                <PokeImage pokemon={terceraEvolucion[0]} shiny={shiny}/>
                <p><span className='fw-bold'>{"#"+terceraEvolucion[0].id}</span> {mayuscula(terceraEvolucion[0].name)}</p>
            </div>
        )
    }
    if (terceraEvolucion.length == 0) {
        return(
            <>
                {
                    segundaEvolucion.map((segundaEvo)=>{
                        return(
                            <div key={primeraEvolucion[0].name+segundaEvo.name} className="text-center py-1 ">
                                <PokeImage pokemon={primeraEvolucion[0]} shiny={shiny}/>
                                <p><span className='fw-bold'>{"#"+primeraEvolucion[0].id}</span> {mayuscula(primeraEvolucion[0].name)}</p>
                                <img className="flecha d-block mx-auto pb-1" src="../src/assets/fecha_pokemon.png"/>
                                <PokeImage pokemon={segundaEvo} shiny={shiny}/>
                                <p><span className='fw-bold'>{"#"+segundaEvo.id}</span> {mayuscula(segundaEvo.name)}</p>
                            </div>
                        )
                    })
                }
            </>
        )
    }
    if (terceraEvolucion.length > 1) {
        return(
            <>
                {
                    terceraEvolucion.map((terceraEvo)=>{
                        return(
                            <div className="text-center">
                                <PokeImage pokemon={primeraEvolucion[0]} shiny={shiny}/>
                                <p><span className='fw-bold'>{"#"+primeraEvolucion[0].id}</span> {mayuscula(primeraEvolucion[0].name)}</p>
                                <img className="flecha d-block mx-auto pb-1" src="../src/assets/fecha_pokemon.png"/>
                                <PokeImage pokemon={segundaEvolucion[0]} shiny={shiny}/>
                                <p><span className='fw-bold'>{"#"+segundaEvolucion[0].id}</span> {mayuscula(segundaEvolucion[0].name)}</p>
                                <img className="flecha d-block mx-auto pb-1" src="../src/assets/fecha_pokemon.png"/>
                                <PokeImage pokemon={terceraEvo} shiny={shiny}/>
                                <p><span className='fw-bold'>{"#"+terceraEvo.id}</span> {mayuscula(terceraEvo.name)}</p>
                            </div>
                        )
                    })
                }
            </>
        )
    }
}
 