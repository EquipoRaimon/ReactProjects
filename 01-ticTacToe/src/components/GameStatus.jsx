export function BotonR({setValorCasilla, cambiarJugador}){

    function reinicio(){
        const asignarValores = Array(9).fill(null);
        cambiarJugador("X");
        setValorCasilla(asignarValores);
    }

    return(
        <button className="btn btn-primary mt-5" onClick={reinicio} >Reset</button>
    )
}

export function Turno({ganador, jugadorActual, relleno}){
    if(ganador){
        return(
            <h1 className="bg-light-subtle mb-2 rounded-1 ">Has ganado, '{ganador}'. ¡Felicidades!</h1>
        )
    }else if(relleno){
        return(
            <h1 className="bg-light-subtle mb-2 rounded-1 ">Hay un empate</h1>
        )
    }else{
        return(
            <h1 className="bg-light-subtle mb-2 rounded-1 ">Es el turno del jugador '{jugadorActual}'</h1>
        )
    }
}
