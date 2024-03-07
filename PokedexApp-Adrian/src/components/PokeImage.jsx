export default function PokeImage({ pokemon, shiny }) {

    //Si no tiene foto se pone la imagen de un Snorlax
    if (pokemon.sprites.other["official-artwork"].front_default == null) {
        return (
            <img src='/Snorlax.png' className="pokeimg" />
        )
    }
    //Retorna la foto shiny o no dependiendo del estado shiny
    return (
        <img src={shiny ? pokemon.sprites.other['official-artwork'].front_shiny : pokemon.sprites.other['official-artwork'].front_default} className="pokeimg"></img>
    )

}