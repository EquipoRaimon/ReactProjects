export const BOARD_WIDTH = 10
export const BOARD_HEIGHT = 20

export function createBoard(){
    return Array.from( Array(BOARD_HEIGHT), () => new Array(BOARD_WIDTH).fill([0, 'clear']) )
}

export function checkCollision(player, board, {x: moveX, y: moveY}){
    for (let y = 0; y < player.tetromino.length; y++) {
        for (let x = 0; x < player.tetromino[y].length; x++) {
            
            //Miramos si el jugador se encuentra en una celda ocupada por un tetromino
            if (player.tetromino[y][x] !== 0) {
                if(
                //Miramos si nuestro movimiento se encuentra dentro del area y permitida
                !board[y + player.pos.y + moveY] ||
                //Miramos si nuestro movimiento se encuentra dentro del area x permitida
                !board[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
                //Miramos si ha chocado con alguna pieza con valor 'merged'
                    board[y+ player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
                ){
                    return true;
                }

            }

        }
        
    }
}