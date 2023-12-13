import '../boton.css';
   


export default function Square({onClick}){
    return (
        <button className="boton btn btn-light btn-outline-dark rounded-0" onClick={onClick}>X</button>
    )
}