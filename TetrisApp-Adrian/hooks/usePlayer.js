import { useCallback, useState } from "react";

import { TETROMINOS ,randomTetromino } from "../Tetrominos";
import { BOARD_WIDTH, checkCollision } from "../GameHelpers";

export function usePlayer(){
    const [player, setPlayer] = useState({ pos: {x: 0, y:0}, tetromino: TETROMINOS[0].shape, collided: false })
    const [nextPlayer, setNextPlayer] = useState( randomTetromino().shape )

    function rotate(matrix, direction){
        //Transponemos las filas por las columnas y viceversa
        const rotatedTetromino = matrix.map((_, index) => matrix.map(col => col[index]) ) 

        if (direction > 0) {
            return rotatedTetromino.map(row => row.reverse())
        }
        return rotatedTetromino.reverse()
    }

    function playerRotate(board, direction){
        //Copia exacta del jugador
        const clonedPlayer = JSON.parse(JSON.stringify(player))
        clonedPlayer.tetromino = rotate(clonedPlayer.tetromino, direction)

        const pos = clonedPlayer.pos.x
        let offset = 1
        while (checkCollision(clonedPlayer, board, { x: 0, y: 0 })) {
            clonedPlayer.pos.x += offset
            offset = -(offset + (offset > 0 ? 1 : -1))
            if (offset > clonedPlayer.tetromino[0].length) {
                rotate(clonedPlayer.tetromino, -direction)
                clonedPlayer.pos.x = pos
                return
            }
        }

        setPlayer(clonedPlayer)
    }


    function updatePlayerPos({ x, y, collided}){
        setPlayer(prev => ({
            ...prev,
            pos: { x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }))
    }

    const resetPlayer = useCallback( () => {

        setPlayer({
            pos: { x: BOARD_WIDTH / 2 -1, y: 0},
            tetromino: nextPlayer,
            collided: false
        })
        
        setNextPlayer( randomTetromino().shape )

    }, [nextPlayer])


    return [player, updatePlayerPos, resetPlayer, playerRotate, nextPlayer]
    
}