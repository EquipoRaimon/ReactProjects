import { useEffect, useState, useCallback } from "react";

export function useJuego(filasBorradas){
    const [puntos, setPuntos] = useState(0)
    const [filas, setFilas] = useState(0)
    const [nivel, setNivel] = useState(0)

    const linePoints = [50, 150, 150, 200]

    const calcScore = useCallback(() => {
        
        if (filasBorradas > 0) {
            setPuntos((prev) => prev + linePoints[filasBorradas -1] * (nivel + 1 ) )
            setFilas((prev) => prev + filasBorradas)
        }

    }, [nivel, linePoints, filasBorradas])

    useEffect(()=> {
        calcScore()

    }, [calcScore, filasBorradas, puntos])

    return [puntos, setPuntos, filas, setFilas, nivel, setNivel]

}



