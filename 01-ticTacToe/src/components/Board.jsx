import Square from "./Square";

function onHandleClick(){
    
}

//onHandleClick=() => {return "x"}

export default function Board(){
    return(
        <div className="btn-group-vertical container-fluid " role="group" aria-label="Vertical button group">
            <div className="btn-group" role="group" aria-label="Basic example">
                <Square  onClick={onHandleClick}></Square>
                <Square onClick={onHandleClick}></Square>
                <Square onClick={onHandleClick}></Square>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Square onClick={onHandleClick}></Square>
                <Square onClick={onHandleClick}></Square>
                <Square onClick={onHandleClick}></Square>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Square onClick={onHandleClick}></Square>
                <Square onClick={onHandleClick}></Square>
                <Square onClick={onHandleClick}></Square>
            </div>
        </div>
    )
}