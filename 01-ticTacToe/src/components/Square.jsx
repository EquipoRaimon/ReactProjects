import '../boton.css';

export default function Square({onClick, value}){
    return (
        <button className="boton btn btn-light btn-outline-dark rounded-0 " onClick={onClick}>{value}</button>
    )
}