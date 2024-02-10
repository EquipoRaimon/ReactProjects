import PokeImage from "./PokeImage"
 
export default function PokeCadenaEvo({shiny, primeraEvolucion, segundaEvolucion, terceraEvolucion, mayuscula }){
    //console.log(primeraEvolucion)
    //console.log(terceraEvolucion)
    //console.log(terceraEvolucion)
 
    //Si el pokemon no tiene evoluciones
    if (segundaEvolucion.length == 0 && terceraEvolucion.length == 0) {
        return (
            <div className="text-center py-1">

                <PokeImage pokemon={primeraEvolucion[0]} shiny={shiny} />
                <p><span className='fw-bold'>{"#" + primeraEvolucion[0].id}</span> {mayuscula(primeraEvolucion[0].name)}</p>

                <hr className="hr hr-blurry mx-5" />
                
            </div>
        )
    }
 //<img className="pokeimg" src="../src/assets/fecha_pokemon.png"/>
    if (segundaEvolucion.length == 1 && terceraEvolucion.length == 1) {
        return(
            <div className="text-center py-1">

                <PokeImage pokemon={primeraEvolucion[0]} shiny={shiny}/>
                <p><span className='fw-bold'>{"#"+primeraEvolucion[0].id}</span> {mayuscula(primeraEvolucion[0].name)}</p>

                <img className="flecha d-block mx-auto pb-1" src="../src/assets/fecha_pokemon.png"/>

                <PokeImage pokemon={segundaEvolucion[0][0]} shiny={shiny}/>
                <p><span className='fw-bold'>{"#"+segundaEvolucion[0][0].id}</span> {mayuscula(segundaEvolucion[0][0].name)}</p>
                <p>{mayuscula(Object.keys(segundaEvolucion[0][1])[0].toString())}: {mayuscula(Object.values(segundaEvolucion[0][1])[0].toString())}</p>
                { Object.keys(segundaEvolucion[0][1])[1] && <p>{mayuscula(Object.keys(segundaEvolucion[0][1])[1].toString())}: {mayuscula(Object.values(segundaEvolucion[0][1])[1].toString())}</p>}

                <img className="flecha d-block mx-auto pb-1" src="../src/assets/fecha_pokemon.png"/>

                <PokeImage pokemon={terceraEvolucion[0][0]} shiny={shiny}/>
                <p><span className='fw-bold'>{"#"+terceraEvolucion[0][0].id}</span> {mayuscula(terceraEvolucion[0][0].name)}</p>
                <p>{mayuscula(Object.keys(terceraEvolucion[0][1])[0].toString())}: {mayuscula(Object.values(terceraEvolucion[0][1])[0].toString())}</p>
                { Object.keys(terceraEvolucion[0][1])[1] && <p>{mayuscula(Object.keys(terceraEvolucion[0][1])[1].toString())}: {mayuscula(Object.values(terceraEvolucion[0][1])[1].toString())}</p>}
                
                <hr className="hr hr-blurry mx-5" />

            </div>
        )
    }
   
    if (terceraEvolucion.length == 0) {
        return(
            <>
                {
                    segundaEvolucion.map((segundaEvo)=>{
                        return(
                            <div key={primeraEvolucion[0].name+segundaEvo[0].name} className="text-center py-1 ">
                                
                                <PokeImage pokemon={primeraEvolucion[0]} shiny={shiny}/>
                                <p><span className='fw-bold'>{"#"+primeraEvolucion[0].id}</span> {mayuscula(primeraEvolucion[0].name)}</p>

                                <img className="flecha d-block mx-auto pb-1" src="../src/assets/fecha_pokemon.png"/>

                                <PokeImage pokemon={segundaEvo[0]} shiny={shiny}/>
                                <p><span className='fw-bold'>{"#"+segundaEvo[0].id}</span> {mayuscula(segundaEvo[0].name)}</p>
                                <p>{mayuscula(Object.keys(segundaEvo[1])[0].toString())}: {mayuscula(Object.values(segundaEvo[1])[0].toString())}</p>
                                { Object.keys(segundaEvo[1])[1] && <p>{mayuscula(Object.keys(segundaEvo[1])[1].toString())}: {mayuscula(Object.values(segundaEvo[1])[1].toString())}</p>}

                                <hr className="hr hr-blurry mx-5" />

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
                            <div key={primeraEvolucion[0].name+segundaEvolucion[0].name+terceraEvo[0].name} className="text-center pb-3">

                                <PokeImage pokemon={primeraEvolucion[0]} shiny={shiny}/>
                                <p><span className='fw-bold'>{"#"+primeraEvolucion[0].id}</span> {mayuscula(primeraEvolucion[0].name)}</p>
                                
                                <img className="flecha d-block mx-auto pb-1" src="../src/assets/fecha_pokemon.png"/>
                                
                                <PokeImage pokemon={segundaEvolucion[0][0]} shiny={shiny}/>
                                <p><span className='fw-bold'>{"#"+segundaEvolucion[0][0].id}</span> {mayuscula(segundaEvolucion[0][0].name)}</p>
                                <p>{mayuscula(Object.keys(segundaEvolucion[0][1])[0].toString())}: {mayuscula(Object.values(segundaEvolucion[0][1])[0].toString())}</p>
                                { Object.keys(segundaEvolucion[0][1])[1] && <p>{mayuscula(Object.keys(segundaEvolucion[0][1])[1].toString())}: {mayuscula(Object.values(segundaEvolucion[0][1])[1].toString())}</p>}

                                <img className="flecha d-block mx-auto pb-1" src="../src/assets/fecha_pokemon.png"/>
                                
                                <PokeImage pokemon={terceraEvo[0]} shiny={shiny}/>
                                <p><span className='fw-bold'>{"#"+terceraEvo[0].id}</span> {mayuscula(terceraEvo[0].name)}</p>
                                <p>{mayuscula(Object.keys(terceraEvo[1])[0].toString())}: {mayuscula(Object.values(terceraEvo[1])[0].toString())}</p>
                                { Object.keys(terceraEvo[1])[1] && <p>{mayuscula(Object.keys(terceraEvo[1])[1].toString())}: {mayuscula(Object.values(terceraEvo[1])[1].toString())}</p>}
                                
                                <hr className="hr hr-blurry mx-5" />

                            </div>
                        )
                    })
                }
            </>
        )
    }
}