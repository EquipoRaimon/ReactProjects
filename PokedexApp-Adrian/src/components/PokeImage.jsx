export default function PokeImage({pokemon, shiny}){

    if (shiny == 1) {

        if(pokemon.sprites.other["official-artwork"].front_shiny == null){
            return(
                <img src='../src/assets/Snorlax.png' className="pokeimg"/>
            )
          }

        return(
            <img src={pokemon.sprites.other["official-artwork"].front_shiny} className="pokeimg"></img>
        )
    }else{

        if(pokemon.sprites.other["official-artwork"].front_default == null){
            return(
                <img src='../src/assets/Snorlax.png' className="pokeimg"/>
            )
          }

        return(
            <img src={pokemon.sprites.other["official-artwork"].front_default} className="pokeimg"></img>
        )
    }

}