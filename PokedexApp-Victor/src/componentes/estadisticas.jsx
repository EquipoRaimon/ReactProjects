import About from './about'
import Evoluciones from './evoluciones'
import Movimientos from './movimientos'
import BaseStats from './baseStats'

export default function Estadisticas({ valor, pokemito }) {
    if (valor == 1) {
        return (
            <About />
        )
    }
    if (valor == 2){
        return(
            <BaseStats/>
        )
    }
    if (valor == 3){
        return(
            <Evoluciones/>
        )
    }
    if (valor == 4){
        return(
            <Movimientos/>
        )
    }

}