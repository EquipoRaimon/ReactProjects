import { useCallback, useState } from "react";

import { PIEZAS ,randomPieza } from "../Piezas";
import { BOARD_WIDTH, checkCollision } from "../AyudasJuego";

export function useJugador(){
    const [jugador, setJugador] = useState({ pos: {x: 0, y:0}, tetromino: PIEZAS[0].shape, collided: false })


    function rotate(matrix, direction){
        //Para trasponer filas por culumnas y al revés
        const rotatedTetromino = matrix.map((_, index) => matrix.map(col => col[index]) ) 

        if (direction > 0) {
            return rotatedTetromino.map(row => row.reverse())
        }
        return rotatedTetromino.reverse()
    }

    function playerRotate(tablero, direction){
        const clonedPlayer = JSON.parse(JSON.stringify(jugador))
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction)

        const pos = clonedPlayer.pos.x
        let offset = 1
        while (checkCollision(clonedPlayer, tablero, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset
            offset = -(offset + (offset > 0 ? 1 : -1))
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -direction)
                clonedPlayer.pos.x = pos
                return
            }
        }

        setJugador(clonedPlayer)
    }


    function updatePlayerPos({ x, y, collided}){
        setJugador(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }

    const reiniciarJugador = useCallback( () => {
        setJugador({
            pos: { x: BOARD_WIDTH / 2 -1, y: 0},
            tetromino: randomPieza().shape,
            collided: false
        })
    }, [])


    return [jugador, updatePlayerPos, reiniciarJugador, playerRotate]
    
}