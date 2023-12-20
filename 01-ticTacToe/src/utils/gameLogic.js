/*
export function cambiarJugador(jugadorActual){
    jugadorActual = jugadorActual == "X" ? "O" : "X";
}
*/
export function calcularGanador(casillas) {
    const lineasGanadoras = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0;i<lineasGanadoras.length;i++){
        const [a, b, c] = lineasGanadoras[i];
        if (casillas[a] && casillas[a] === casillas[b] && casillas[a] === casillas[c]) {
            return true;
          }
    }
    return false;

}