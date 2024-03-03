export default function Loading({listaPokemon}){
  
    if (listaPokemon.length == 0) {
        return(

          <div className=" col-8 mx-auto mt-5 d-flex">
            <div className="mx-auto">
              <img src="/pokeball.gif" className="w-100"></img>
            </div>
          </div>
        )
    }
    
}