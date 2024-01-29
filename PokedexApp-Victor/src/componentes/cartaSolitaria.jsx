import imagenes from '../assets/imagenes'
import './carta.css'

export default function CartaSolitaria({pokemito, setpokemito}) {
    if (!pokemito) {
        return <></>
    }

    function handleOnClick(){
        setpokemito()
    }

    function coloresPokemon(pokemito){
        const types = pokemito.types
        const color = types[0].type.name
        const colorPokemon = {
          normal : {backgroundColor: '#A8A878'},
          fighting : {backgroundColor: '#C03028'},
          flying : {backgroundColor: '#A890F0'},
          poison : {backgroundColor: '#A040A0'},
          ground : {backgroundColor: '#E0C068'},
          rock : {backgroundColor: '#B8A038'},
          bug : {backgroundColor: '#A8B820'},
          ghost : {backgroundColor: '#705898'},
          fire : {backgroundColor: '#F08030'},
          water : {backgroundColor: '#6890F0'},
          grass : {backgroundColor: '#78C850'},
          electric : {backgroundColor: '#F8D030'},
          psychic : {backgroundColor: '#F85888'},
          ice : {backgroundColor: '#98D8D8'},
          dragon : {backgroundColor: '#7038F8'}
        }
        return colorPokemon[color]
      }

    return (
        <div className="d-flex flex-wrap">
            <div className="card mx-auto cartaSola" style={coloresPokemon(pokemito)}>
                <button type='button' className="w-25 bg-transparent border-0" onClick={() => handleOnClick()}>
                    <img src={imagenes.img5} className='w-50'/>
                </button>
                <div className=" h-75 ">
                    <img className="h-100 w-75" src={pokemito.sprites.other.home.front_default}></img>
                </div>
                <div className="card-body">
                    <h5 className="texto card-title">{pokemito.id}</h5>
                    <p className="texto card-text">{pokemito.name}</p>
                </div>
            </div>
        </div>
    )
}