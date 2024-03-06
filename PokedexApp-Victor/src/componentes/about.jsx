import React, { useEffect } from 'react';

export default function About({ pokemito, ubi, setubi }) {

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemito.id + "/encounters")
      .then((res) => res.json())
      .then((result) => {
        setubi(result);
      });
  }, [pokemito.id, setubi]);

  function extraerZonas() {
    let zonasCaps = [];
    if (typeof ubi !== "undefined" && Array.isArray(ubi)) {
      ubi.forEach((a) => {
        if (a && a.location_area && a.location_area.name) {
          zonasCaps.push(`${a.location_area.name} | `);
        }
      });
    }
    return zonasCaps;
  }

  return (
    <>
      <h1>HABILIDADES:</h1>
      {
        pokemito.abilities.map((a, aIndex) => (
          <div key={aIndex}>
            {a.ability.name}
          </div>
        ))
      }
      <hr></hr>
      <h1>SPECIES:</h1>
      {pokemito.species.name}
      <hr></hr>
      <h1>ALTURA:</h1>
      {pokemito.height / 10} M
      <hr></hr>
      <h1>PESO:</h1>
      {pokemito.weight / 10} KG
      <hr></hr>
      <button type="button" className="btn bg-dark-subtle bg-opacity-75 mt-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        <h1>ZONA DE CAPTURAS</h1>
      </button>
      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-light">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">ZONA DE CAPTURAS</h5>
              <button type="button" className="btn-close bg-danger" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="ms-2 fw-bold">{extraerZonas().length === 0 ? <>ES UNA EVOLUCIÓN</> : extraerZonas()}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
