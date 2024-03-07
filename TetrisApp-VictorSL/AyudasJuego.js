export const BOARD_WIDTH = 10
export const BOARD_HEIGHT = 20

export function crearTablero(){
    return Array.from( Array(BOARD_HEIGHT), () => new Array(BOARD_WIDTH).fill([0, 'clear']) )
}

export function checkCollision(jugador, tablero, {x: moveX, y: moveY}){
    for (let y = 0; y < jugador.piezas.length; y++) {
        for (let x = 0; x < jugador.piezas[y].length; x++) {
            
            // Primero vemos si el jugador ocupa una celda en la que ya hay una pieza
            if (jugador.piezas[y][x] !== 0) {
                if(
                //Segundo si el movimiento que vamos a hacer esta en el área correcto
                !tablero[y + jugador.pos.y + moveY] ||
                //Vemos si el movimiento esta en el área correctamente
                !tablero[y + jugador.pos.y + moveY][x + jugador.pos.x + moveX] ||
                // Vemos
                    tablero[y+ jugador.pos.y + moveY][x + jugador.pos.x + moveX][1] !== 'clear'
                ){
                    return true;
                }

            }

        }
        
    }
}