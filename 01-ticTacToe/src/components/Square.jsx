import '../global.css';

export default function Square({onClick, value}){
    return (
        <button className="boton btn btn-light btn-outline-dark rounded-0 fs-1 " onClick={onClick}>{value}</button>
    )
}