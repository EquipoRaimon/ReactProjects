# 01-TICTACTOE
## Proyecto del juego tres en raya

---

Este es mi proyecto de React sobre el juego tres en raya. (Adrián)  
Información sobre los componentes y funciones utilizadas:  
- App.jsx
    - En este componente están los estados y las funciones que van a modificar los estados y que se van a ir pasando a los componentes hijos. También es el componente en el que se monta el juego, donde se añaden los componentes que se mencionan debajo. Estas son las funciones que utiliza el componente y para qué sirven:
    - handleClick --> Sirve para que en caso de haber ganado un jugador o de clicar una casilla que ya tenía una 'X' o una 'O' no se ejecuten las otras dos funciones que tiene App.jsx.
    - actualizarEstado --> Sirve para añadir una 'X' o una 'O' en una posición específica al estado que guarda el valor de las casillas.
    - cambiarXO --> Sirve para actualizar el estado que guarda el jugadorActual y que se vaya intercambiando entre 'X' y 'O'.
- GameStatus.jsx
    - GameStatus engloba dos componentes:
    - BotonR --> Incluye una función que sirve para reiniciar el estado que guarda el valor de las casillas y devuelve un botón que al clicarlo ejecuta esa función.
    - Turno --> Sirve para mostrar si es el turno de 'X' u 'O', o si hay un empate o si hay un ganador. 
- Board.jsx
    - Board devuelve un componente de su mismo nombre que engloba 9 componentes Square para formar un tablero de 3x3.
- Square.jsx
    - Devuelve un componente del mismo nombre. Devuelve un botón al que se le ejecuta la función handleClick que se encuentra en App.jsx


Estos son los pasos que hay que seguir para poder utilizar el proyecto en un localhost.
1. Desde la consola de comandos ponemos:
~~~
git clone https://github.com/EquipoRaimon/ReactProjects.git
~~~
Esto hará que se nos descargue el repositorio entero de ReactProjects.

2. Luego accedemos a donde se haya guardado el proyecto desde la consola de comandos. Para moverse en la cmp se usa el comando cd seguido de la dirección donde esté guardado 
Debería quedar algo así:  
cd C:\LaDireccionQueSea\ReactProjects\01-ticTacToe
3. Habiendo accedido ya a la carpeta del proyecto, procedemos a instalar las dependencias necesarias para ejecutarlo mediante este comando:
~~~
npm install
~~~
4. Finalmente ejecutamos este último comando y copiamos el enlace que saldrá en un navegador.
~~~
npm run dev
~~~

¡Ya está! Ahora a disfrutar de este tres en raya.
---
