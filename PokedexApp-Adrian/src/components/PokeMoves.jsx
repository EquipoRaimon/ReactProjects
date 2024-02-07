export default function PokeMoves({pokemon, mayuscula}){

    return (
        <>
            <table className="table  table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Level</th>
                        <th scope="col">How</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemon.moves.map((move) => {
                            return (
                                <tr key={move.move.name}>
                                    <td>{mayuscula(move.move.name)}</td>
                                    <td>{move.version_group_details[0].level_learned_at}</td>
                                    <td>{move.version_group_details[0].move_learn_method.name}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )

}