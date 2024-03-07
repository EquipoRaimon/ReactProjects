import About from './about'
import Evoluciones from './evoluciones'
import Movimientos from './movimientos'
import BaseStats from './baseStats'

//Función para que cada apartado muestre el contenido de un componente
export default function Estadisticas({ valor, pokemito, ubi, setubi, evo, setevo}) {
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
            <Evoluciones pokemito={pokemito} evo={evo} setevo={setevo}/>
        )
    }
    if (valor == 4){
        return(
            <Movimientos pokemito={pokemito}/>
        )
    }

}