export default function PokeCadenaEvo({shiny, primeraEvolucion, segundaEvolucion, terceraEvolucion }){
    if (segundaEvolucion.length == 0 && terceraEvolucion.length == 0) {
        return(
            <>
                <p className="text-center ">Este pokemon no evoluciona</p>
            </>
        )
    }

    if (segundaEvolucion.length == 1 && terceraEvolucion.length == 1) {
        return(
            <>
                <p>{primeraEvolucion[0].name}</p>
                <p>{segundaEvolucion[0].name}</p>
                <p>{terceraEvolucion[0].name}</p>
            </>
        )
    }
    if (terceraEvolucion.length == 0) {
        return(
            <>
                {
                    segundaEvolucion.map((segundaEvo)=>{
                        return(
                            <>
                                <p>{primeraEvolucion[0].name}</p>
                                <p>{segundaEvo.name}</p>
                            </>
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
                            <>
                                <p>{primeraEvolucion[0].name}</p>
                                <p>{segundaEvolucion[0].name}</p>
                                <p>{terceraEvo.name}</p>
                            </>
                        )
                    })
                }
            </>
        )
    }
}
