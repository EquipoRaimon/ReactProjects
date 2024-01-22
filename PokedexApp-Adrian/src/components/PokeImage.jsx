export default function PokeImage({pokemon, shiny}){

    if (shiny == 1) {
        return(
            
            <img src={pokemon.sprites.other["official-artwork"].front_shiny} className="pokeimg"></img>
        )
    }else{

        return(

            <img src={pokemon.sprites.other["official-artwork"].front_default} className="pokeimg"></img>
        )
    }

}