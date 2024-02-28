import About from './about'
import Evoluciones from './evoluciones'
import Movimientos from './movimientos'
import BaseStats from './baseStats'

export default function Estadisticas({ valor, pokemito, pokemonBuscado, ubi, setubi}) {
    if (valor == 1) {
        return (
            <About pokemito={pokemito} ubi={ubi} setubi={setubi}/>
        )
    }
    if (valor == 2){
        return(
            <BaseStats pokemito={pokemito}/>
        )
    }
    if (valor == 3){
        return(
            <Evoluciones pokemito={pokemito}/>
        )
    }
    if (valor == 4){
        return(
            <Movimientos pokemito={pokemito}/>
        )
    }

}