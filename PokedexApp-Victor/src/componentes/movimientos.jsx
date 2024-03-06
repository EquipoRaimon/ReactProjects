export default function Movimientos({ pokemito }) {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Nivel</th>
            <th scope="col">Cómo</th>
          </tr>
        </thead>
        <tbody>
          {
            pokemito.moves.map((m, mIndex) => {
              return (
                <tr key={mIndex}>
                  <td>{m.move.name}</td>
                  <td>{m.version_group_details[0].level_learned_at}</td>
                  <td>{m.version_group_details[0].move_learn_method.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}