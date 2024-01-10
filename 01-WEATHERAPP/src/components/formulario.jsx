export default function Form({ buscarPressed, setBuscar }) {
    return (
        <form onSubmit={(e) => {e.preventDefault()}}>
            <input type="text" className="form-control" id="lugar" placeholder="Ciudad" onChange={(e) => {setBuscar(e.target.value) }}></input>
            <input type="submit" value="Submit" onClick={ buscarPressed()}/>
        </form>
    )

}