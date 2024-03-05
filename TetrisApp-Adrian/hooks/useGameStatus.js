import { useEffect, useState, useCallback } from "react";

export function useGameStatus(rowsCleared){
    const [score, setScore] = useState(0)
    const [rows, setRows] = useState(0)
    const [level, setLevel] = useState(0)

    const linePoints = [50, 150, 450, 1350]

    const calcScore = useCallback(() => {
        
        if (rowsCleared > 0) {
            setScore((prev) => prev + linePoints[rowsCleared -1] * (level + 1 ) )
            setRows((prev) => prev + rowsCleared)
        }

    }, [level, linePoints, rowsCleared])

    useEffect(()=> {
        calcScore()

    }, [calcScore, rowsCleared, score])

    return [score, setScore, rows, setRows, level, setLevel]

}



