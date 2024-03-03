import { useEffect, useState } from 'react'

export default function PokeDatos({ pokemon, mayuscula }) {

    const [especiePokemon, setEspeciePokemon] = useState()
    const [localizacionPokemon, setLocalizacionPokemon] = useState()

    useEffect(() => {

        const getEspeciePokemon = async () => {
            const pokemon_species = await fetch(pokemon.species.url).then(data => data.json())
            await Promise.resolve(pokemon_species).then(value => setEspeciePokemon(value));
        }
        getEspeciePokemon()

        const getLocalizacionPokemon = async () => {
            const location_area_encounters = await fetch(pokemon.location_area_encounters).then(data => data.json())
            await Promise.resolve(location_area_encounters).then(value => setLocalizacionPokemon(value));
        }
        getLocalizacionPokemon()


    }, [pokemon])

    if (especiePokemon == undefined || localizacionPokemon == undefined) {
        return null
    }

    function getDescripcion() {
        const enDescripciones = []
        especiePokemon.flavor_text_entries.map((poke) => {
            if (poke.language.name === "en") {
                enDescripciones.push(poke.flavor_text)
            }
        })
        if (enDescripciones.length == 0) {
            return "This pokemon doesn't have a description"
        }
        return enDescripciones[0]

    }

    function localizacionNull() {
        if (localizacionPokemon.length == 0) {
            return (
                <p>Unknown</p>
            )
        } else {
            return (
                <></>
            )
        }
    }

    return (
        <>
            <dl className="row mx-1 pt-2">
                <dt className="col-md-4">Description</dt>
                <dd className="col-md-8">{getDescripcion()}</dd>

                <dt className="col-md-4">Species</dt>
                <dd className="col-md-8">{especiePokemon.name}</dd>

                <dt className="col-md-4">Height</dt>
                <dd className="col-md-8">{pokemon.height / 10} m</dd>

                <dt className="col-md-4">Weight</dt>
                <dd className="col-md-8">{pokemon.weight / 10} kg</dd>

                <dt className="col-md-4">Abilities</dt>
                <dd className="col-md-8">
                    {pokemon.abilities.map((habilidad) => {
                        return (
                            <p key={habilidad.ability.name}>{mayuscula(habilidad.ability.name)}</p>
                        )
                    }
                    )}
                </dd>

                <dt className="col-md-4">Capture zones</dt>
                <dd className="col-md-8">
                    {localizacionPokemon.map((localizacion) => {
                        return (
                            <p key={localizacion.location_area.name}>{mayuscula(localizacion.location_area.name)}</p>
                        )
                    }
                    )}
                    {
                        localizacionNull()
                    }
                </dd>
            </dl>

            <hr className="hr hr-blurry mx-5" />
        </>
    )

}