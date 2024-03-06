# Tetris
## Este documento describe los componentes de React y los hooks utilizados para construir un juego de Tetris. Los componentes están diseñados para trabajar juntos y proporcionar una experiencia completa de juego de Tetris.

## Componentes

- App.js
    - Sirve como el componente raíz que recoge todo el juego. Inicializa el estado del juego, incluye todos los componentes principales y gestiona el ciclo de vida del juego.
- Botones.js
    - Implementa los botones de control del juego, como derecha, izquierda, abajo y rotación.
- BotonInicioPausa.js
    - Un componente de botón para iniciar y pausar el juego.
- Celdillas.js
    - Renderiza las celdas individuales que componen la cuadrícula de Tetris.
- MostrarPuntosYNivel.js
    - Muestra al jugador la puntuación actual y el nivel del juego.
- Tablero.js
    - Representa el tablero principal del juego de Tetris.
- Tetris.js
    - El componente principal del juego que integra todos los demás componentes y la lógica del juego.
- AyudasJuego.js
    - Ofrece funcionalidades adicionales para ayudar a los jugadores durante el juego, como controles para que la pieza no se salga del tablero, etc.
- Piezas.js
    - Define las formas y colores de las piezas de Tetris. Este componente tiene la funcion de cómo se generar piezas aleatoriamente.

## Estados
- useIntervalo.js
    - Estado para configurar un intervalo, utilizado para mover las piezas de Tetris hacia abajo en el tablero.
- useJuego.js
    - Para gestionar el estado del juego, incluyendo nivel, puntuación y eliminación de filas.
- useJugador.js
    - Estado para manejar la pieza de Tetris actual del jugador, incluyendo su posición y rotación.
- useTablero.js
    - Estado para gestionar el estado del tablero de Tetris, incluyendo la colocación de piezas y la eliminación de líneas.
