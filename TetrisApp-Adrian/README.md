# Tetris Game

---

## Componentes

El juego Tetris utiliza varios componentes para su funcionalidad. Aquí se describe el propósito de cada componente:

### `Board`

El componente `Board` se encarga de renderizar el tablero de juego donde caen los tetrominos. Recibe la matriz que representa el estado actual del tablero y dibuja cada celda en función del tipo de tetromino que ocupa esa posición.

### `Buttons`

El componente `Buttons` proporciona botones en pantalla para que el jugador pueda controlar el movimiento y la rotación de los tetrominos. Tiene botones para mover hacia la izquierda, derecha y abajo, así como para rotar en sentido horario y antihorario.

### `Cell`

El componente `Cell` representa una celda individual en el tablero de juego. Recibe el tipo de tetromino que ocupa la celda y dibuja un cuadro con el color correspondiente.

### `Display`

El componente `Display` muestra información importante para el jugador, como el puntaje actual, el nivel y el estado del juego (por ejemplo, "Game Over"). Tiene diferentes estilos y colores para resaltar la información relevante.

### `MiniBoard`

El componente `MiniBoard` muestra la próxima pieza que caerá en el tablero. Es una vista previa de la siguiente pieza que el jugador controlará.

### `StartButton`

El componente `StartButton` proporciona un botón para comenzar, reiniciar o pausar el juego. Dependiendo del estado del juego, cambia su funcionalidad y su texto para reflejar la acción que se puede realizar.

## Instalación

Para correr el Tetris de forma local en tu máquina, sigue estos pasos:

1. Copia el repositorio a tu máquina:

~~~
git clone https://github.com/EquipoRaimon/ReactProjects.git
~~~

2. Navega al directorio que contiene el proyecto
~~~
cd ReactProjects
~~~

3. Instala las dependencias en ese directorio
~~~
npm install -g expo-cli
~~~
4. Navega al directorio del proyecto
~~~
cd TetrisApp-Adrian
~~~
5. Instala las dependencias
~~~
npm install expo
~~~
6. Ejecuta el juego 
~~~
npx expo start
~~~
Abre el juego en el emulador o en tu dispositivo físico utilizando la aplicación Expo Go.

¡Ya está! Ahora a disfrutar de este Tetris.
---
