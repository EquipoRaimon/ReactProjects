import { useState, useEffect } from "react";

import { crearTablero } from "../AyudasJuego";

export function useTablero(jugador, reiniciarJugador) {
    const [tablero, setTablero] = useState(crearTablero())
    const [filasBorradas, setFilasBorradas] = useState(0)

    useEffect(() => {
        setFilasBorradas(0)

        const sweepRows = newBoard =>
            newBoard.reduce((acc, row) => {
                if (row.findIndex( cell => cell[0] === 0) === -1) {
                    setFilasBorradas(prev => prev +1)
                    acc.unshift(new Array(newBoard[0].length).fill([0, 'clear']))
                    return acc
                }
                acc.push(row)
                return acc
            }, [])
        

        function updateBoard(prevBoard) {
            //Desrenderizamos la pieza en la posición antigua
            const newBoard = prevBoard.map(row => row.map(cell => (cell[1] === 'clear' ? [0, 'clear'] : cell)));

            // Pintamos la pieza
            jugador.tetromino.forEach((row, y) => {
                row.forEach((value, x) => {
                    if (value !== 0) {
                        newBoard[y + jugador.pos.y][x + jugador.pos.x] = [value, `${jugador.collided ? 'merged' : 'clear'}`, ];
                    }
                });
            });

            // Vemos si ha colisionado bien
            if (jugador.collided) {
                reiniciarJugador()
                return sweepRows(newBoard)
            }

            return newBoard
        }

        setTablero(prev => updateBoard(prev))

    }, [ jugador.collided, jugador.pos.x, jugador.pos.y, jugador.tetromino, reiniciarJugador])

    return [tablero, setTablero, filasBorradas]

}