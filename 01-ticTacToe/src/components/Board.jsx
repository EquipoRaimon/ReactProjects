import Square from "./Square";

function handleClick(){
    alert("Me hiciste click");
}


export default function Board(){
    return(
        <div className="btn-group-vertical container-fluid " role="group" aria-label="Vertical button group">
            <div className="btn-group" role="group" aria-label="Basic example">
                <Square onClick={handleClick}></Square>
                <Square onClick={handleClick}></Square>
                <Square onClick={handleClick}></Square>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Square onClick={handleClick}></Square>
                <Square onClick={handleClick}></Square>
                <Square onClick={handleClick}></Square>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Square onClick={handleClick}></Square>
                <Square onClick={handleClick}></Square>
                <Square onClick={handleClick}></Square>
            </div>
        </div>
    )
}