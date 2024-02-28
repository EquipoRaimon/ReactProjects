export default function BaseStats({pokemito}) {

  const resultadoTotal = pokemito.stats.map((x, y) => (x.base_stat + (y - y))).reduce((x, y) => x + y);

  return (
    <>
      {
        pokemito.stats.map((s) => {
          return (
            <section>
              <span >{s.stat.name} </span>
              <div class="progress mb-2" role="progressbar" aria-label="Success example">
                <div class="progress-bar bg-success" style={{ width: (s.base_stat/(resultadoTotal)*100) + "%" }}>{s.base_stat} / {resultadoTotal}</div>
              </div>
            </section>
          )
        })
      }
      <>
        <hr></hr>
        <h1>PUNTOS TOTALES:</h1>
        <h4>{resultadoTotal} PTOS</h4>
      </>
    </>)
}