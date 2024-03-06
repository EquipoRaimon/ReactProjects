# Tetris
## Este documento describe los componentes de React y los hooks utilizados para construir un juego de Tetris. Los componentes están diseñados para trabajar juntos y proporcionar una experiencia completa de juego de Tetris.

## Componentes

- App.js
    - Sirve como el componente raíz que encapsula todo el juego. Es probable que inicialice el estado del juego, incluya todos los componentes principales y gestione el ciclo de vida del juego.
- Botones.js
    - Implementa los botones de control del juego, como iniciar, pausar y reiniciar.
- BotonInicioPausa.js
    - Un componente de botón específico para iniciar y pausar el juego.
- Celdillas.js
    - Renderiza las celdas individuales que componen la cuadrícula de Tetris.
- MostrarPuntosYNivel.js
    - Muestra al jugador la puntuación actual y el nivel del juego.
- Tablero.js
    - Representa el tablero principal del juego de Tetris donde ocurre la jugabilidad.
- Tetris.js
    - El componente principal del juego que integra todos los demás componentes y la lógica del juego.
- AyudasJuego.js
    - Ofrece funcionalidades adicionales para ayudar a los jugadores durante el juego, como consejos, trucos o explicaciones de controles. Mejora la experiencia de juego al proporcionar ideas útiles o herramientas.
- Piezas.js
    - Define las formas, rotaciones y colores de las piezas de Tetris. Este componente es crucial para la mecánica del juego, ya que determina cómo se generan las piezas y cómo interactúan con el tablero de juego.

## Estados
- useIntervalo (useIntervalo.js)
    - Descripción: Un hook personalizado para configurar un intervalo, probablemente utilizado para mover las piezas de Tetris hacia abajo en la cuadrícula.
- useJuego (useJuego.js)
    - Descripción: Gestiona el estado del juego, incluyendo nivel, puntuación y eliminación de filas.
- useJugador (useJugador.js)
    - Descripción: Maneja la pieza de Tetris actual del jugador, incluyendo su posición y rotación.
- useTablero (useTablero.js)
    - Descripción: Un hook personalizado para gestionar el estado del tablero de Tetris, incluyendo la colocación de piezas y la eliminación de líneas.
