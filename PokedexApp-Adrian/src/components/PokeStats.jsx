export default function PokeStats({ pokemon, mayuscula }) {

    const stats = []
    pokemon.stats.map((stat) => {
        stats.push(stat.base_stat)
    })
    
    const sumaStats = stats.reduce((acumulador, valorActual) => 
    acumulador + valorActual
    )

    return (
        <>
            <div className="p-2">
                {
                    pokemon.stats.map((stat) => {
                        return (
                            <div key={stat.stat.name}>
                                <p>{mayuscula(stat.stat.name)}</p>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={stat.base_stat} aria-valuemin="0" aria-valuemax="200">
                                    <div className="progress-bar" style={{ width: (stat.base_stat/120*100) + "%" }}>{stat.base_stat}</div>
                                </div>
                            </div>
                        )
                    })

                }
                
                <div>
                    <p>Total</p>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={sumaStats} aria-valuemin="0" aria-valuemax="1200">
                        <div className="progress-bar" style={{ width: (sumaStats/720*100) + "%" }}>{sumaStats}</div>
                    </div>
                </div>

            </div>
            
            <hr className="hr hr-blurry mx-5" />

        </>
    )
}