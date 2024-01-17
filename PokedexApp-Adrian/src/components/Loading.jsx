export default function Loading({listaPokemon}){
    if (listaPokemon.length == 0) {
        return(
          // cambiar fondo
          <div className=" pantalla-carga mx-auto mt-5 d-flex bg-primary  rounded-3">
            <div>
                <img src="../src/assets/Snorlax.png" className="carga"></img>
            </div>
            <div className="texto-carga">
                <h5>Cargando</h5>
            </div>
          </div>
    )
    }
    
}