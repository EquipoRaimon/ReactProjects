import imagenes from '../assets/imagenes'
import './carta.css'

export default function Cartas({ pokemon, pokemito, setpokemito, coloresPokemon}) {
    if (pokemito) {
        return <></>
    }

    function handleOnClick(poke) {
        setpokemito(poke)
    }

    function coloresPokemon(poke) {
        const types = poke.types
        const color = types[0].type.name
        const colorPokemon = {
            normal: { backgroundColor: '#A8A878' },
            fighting: { backgroundColor: '#C03028' },
            flying: { backgroundColor: '#A890F0' },
            poison: { backgroundColor: '#A040A0' },
            ground: { backgroundColor: '#E0C068' },
            rock: { backgroundColor: '#B8A038' },
            bug: { backgroundColor: '#A8B820' },
            ghost: { backgroundColor: '#705898' },
            fire: { backgroundColor: '#FF3D3D' },
            water: { backgroundColor: '#6890F0' },
            grass: { backgroundColor: '#59DE39' },
            electric: { backgroundColor: '#FFFB00' },
            psychic: { backgroundColor: '#F85888' },
            ice: { backgroundColor: '#98D8D8' },
            dragon: { backgroundColor: '#7038F8' },
            fairy : {backgroundColor: '#FFAAEE'}
        }
        return colorPokemon[color]
    }

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 mx-auto">
            {
                //Recorro cada pokemon
                pokemon.map((poke, pokeIndex) => {
                    return (
                        //muestro sus datos de la carta pequeña
                        <div key={pokeIndex} className='p-3'>
                            <img className="w-25 mx-auto " src={imagenes.img6}/>
                            <div key={poke.id} className="card carta" onClick={() => handleOnClick(poke)} style={coloresPokemon(poke)}>
                                <div className="card-img-top h-75 ">
                                    <img className="h-100 w-75" src={poke.sprites.other.home.front_default}></img>
                                </div>
                                <div className="card-body">
                                    <h5 className="texto card-title">{poke.id}</h5>
                                    <p className="texto card-text">{poke.name}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}