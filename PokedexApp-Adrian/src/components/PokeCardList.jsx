import PokeCardSmall from './PokeCardSmall'

export default function PokeCardList({listaPokemon,pokemon, handleClick}){
    if (pokemon == null) {
        return(
        <div className='d-flex flex-wrap '>
        {
          listaPokemon.map((poke) => {
            return(
              
              <PokeCardSmall pokemon={poke} key={poke.id} handleClick={handleClick}/>

            )
          })
          
        }

      </div>
    )
    }
    
}