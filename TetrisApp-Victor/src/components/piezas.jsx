export function Piezas() {
    // Definición de constantes para cada tipo de pieza para mejorar la legibilidad
    const I = 1, J = 2, L = 3, O = 4, S = 5, T = 6, Z = 7;

    const SHAPES = [
        // Pieza I
        [
            [I, I, I, I],
        ],
        // Pieza J
        [
            [J, 0, 0],
            [J, J, J],
        ],
        // Pieza L
        [
            [0, 0, L],
            [L, L, L],
        ],
        // Pieza O
        [
            [O, O],
            [O, O],
        ],
        // Pieza S
        [
            [0, S, S],
            [S, S, 0],
        ],
        // Pieza T
        [
            [0, T, 0],
            [T, T, T],
        ],
        // Pieza Z
        [
            [Z, Z, 0],
            [0, Z, Z],
        ],
    ];

    return SHAPES;
}


