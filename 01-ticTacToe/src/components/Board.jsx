import Square from "./Square";


export default function Board({casillas, handleClick}){
    return(
        <div className="btn-group-vertical container-fluid">
            <div className="btn-group">
                <Square onClick={() =>{handleClick(0)}} value={casillas[0]}></Square>
                <Square onClick={() =>{handleClick(1)}} value={casillas[1]}></Square>
                <Square onClick={() =>{handleClick(2)}} value={casillas[2]}></Square>
            </div>
            <div className="btn-group">
                <Square onClick={() =>{handleClick(3)}} value={casillas[3]}></Square>
                <Square onClick={() =>{handleClick(4)}} value={casillas[4]}></Square>
                <Square onClick={() =>{handleClick(5)}} value={casillas[5]}></Square>
            </div>
            <div className="btn-group">
                <Square onClick={() =>{handleClick(6)}} value={casillas[6]}></Square>
                <Square onClick={() =>{handleClick(7)}} value={casillas[7]}></Square>
                <Square onClick={() =>{handleClick(8)}} value={casillas[8]}></Square>
            </div>
        </div>
    )
}