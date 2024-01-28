export default function PokeStats({ pokemon, mayuscula }) {

    const stats = []
    pokemon.stats.map((stat) => {
        stats.push(stat.base_stat)
    })
    
    const sumaStats = stats.reduce((acumulador, valorActual) => 
    acumulador + valorActual
    )

    function mayuscula(palabra){
        return palabra.charAt(0).toUpperCase() + palabra.slice(1)
    }

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
                                {/*
                                <label htmlFor="file">{stat.stat.name}</label>
                                <meter id="file" value={stat.base_stat} max="200" min="0">  </meter>
                                */}
                            </div>
                        )
                    })

                }
                
                <div>
                    <p>Total</p>
                    <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow={sumaStats} aria-valuemin="0" aria-valuemax="1200">
                        <div className="progress-bar" style={{ width: (sumaStats/720*100) + "%" }}>{sumaStats}</div>
                    </div>
                    {/*
                    <label htmlFor="file">Total</label>
                    <meter id="file" value={sumaStats} max="1200" min="0">  </meter>
                    */}
                </div>

            </div>
        </>
    )
}