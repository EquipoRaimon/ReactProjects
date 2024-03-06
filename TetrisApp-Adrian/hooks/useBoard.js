import { useState, useEffect } from "react";

import { createBoard } from "../GameHelpers";

export function useBoard(player, resetPlayer) {
    const [board, setBoard] = useState(createBoard())
    const [rowsCleared, setRowsCleared] = useState(0)

    useEffect(() => {
        setRowsCleared(0)

        const sweepRows = newBoard =>
            newBoard.reduce((acc, row) => {
                if (row.findIndex( cell => cell[0] === 0) === -1) {
                    setRowsCleared(prev => prev +1)
                    acc.unshift(new Array(newBoard[0].length).fill([0, 'clear']))
                    return acc
                }
                acc.push(row)
                return acc
            }, [])
        

        function updateBoard(prevBoard) {
            //Desrenderizamos la pieza en la posición antigua
            const newBoard = prevBoard.map(row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)));

            // Pintamos el tetromino
            player.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newBoard[y + player.pos.y][x + player.pos.x] = [value, `${player.collided ? 'merged' : 'clear'}`, ];
                    }
                });
            });

            // Chequeamos si ha colisionado
            if (player.collided) {
                resetPlayer()
                return sweepRows(newBoard)
            }

            return newBoard
        }

        setBoard(prev => updateBoard(prev))

    }, [ player.collided, player.pos.x, player.pos.y, player.tetromino, resetPlayer])

    return [board, setBoard, rowsCleared]

}