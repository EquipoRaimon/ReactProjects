import { useEffect, useState, useCallback } from "react";

export function useJuego(filasBorradas){
    const [puntos, setPuntos] = useState(0)
    const [filas, setFilas] = useState(0)
    const [nivel, setNivel] = useState(0)

    const lineaDePuntos = [35, 70, 140, 280]

    const calculoPuntos = useCallback(() => {
        
        if (filasBorradas > 0) {
            setPuntos((prev) => prev + lineaDePuntos[filasBorradas -1] * (nivel + 1 ) )
            setFilas((prev) => prev + filasBorradas)
        }

    }, [nivel, lineaDePuntos, filasBorradas])

    useEffect(()=> {
        calculoPuntos()

    }, [calculoPuntos, filasBorradas, puntos])

    return [puntos, setPuntos, filas, setFilas, nivel, setNivel]

}



