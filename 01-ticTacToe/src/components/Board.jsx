import Square from "./Square";

export default function Board(){
    return(
        <div className="btn-group-vertical container-fluid " role="group" aria-label="Vertical button group">
            <div className="btn-group" role="group" aria-label="Basic example">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
        </div>
    )
}