import '../formulario.css'

export default function Form() {
  return (
    <form>
        <div class="mb-3">
            <input type="text" class="form-control" id="lugar" placeholder="Buscar lugar..."></input>
            <submit type="submit" class="btn btn-primary">Buscar</submit>
        </div>
    </form>
  )
}