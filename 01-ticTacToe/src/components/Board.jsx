import Square from "./Square";

export default function Board(){
    return(
        <div class="btn-group-vertical" role="group" aria-label="Vertical button group">
            <div class="btn-group" role="group" aria-label="Basic example">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
            <div class="btn-group" role="group" aria-label="Basic example">
                <Square></Square>
                <Square></Square>
                <Square></Square>
            </div>
        </div>
    )
}