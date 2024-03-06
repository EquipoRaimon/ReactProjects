# POKÉDEX
## Descripción general de los componentes de React desarrollados para la Pokédex. Cada componente está diseñado para mostrar diferentes aspectos de los datos de Pokémon, utilizando la API de Pokémon.

## Componentes

- app.jsx
    - Obtiene información sobre los primeros 151 Pokémon de la PokeAPI.
    - Muestra una barra de navegación (Navbar) para buscar Pokémon.
    - Muestra cartas de Pokémon (Cartas) y una carta solitaria (CartaSolitaria).

- about.jsx
    - Muestra información sobre un Pokémon específico, incluidas las ubicaciones de encuentro. Obtiene datos según el ID del Pokémon y actualiza el estado del componente con los resultados.

- baseStats.jsx
    - Representa las estadísticas base de un Pokémon. Visualiza atributos como PS, Ataque, Defensa, etc., en un formato estilizado.

- cartas.jsx
    -  Gestiona la visualización de múltiples cartas de Pokémon, cada una representando a un Pokémon. Este componente probablemente se utiliza para mostrar una colección o una lista de Pokémon.

- cartaSolitaria.jsx
    -  Se centra en mostrar información detallada sobre un solo Pokémon en su carta. Esto podría incluir datos más completos o un diseño más detallado en comparación con cartas.jsx.

- estadisticas.jsx
    - Presenta estadísticas detalladas relacionadas con Pokémon. Esto podría incluir varios métricas y puntos de datos no cubiertos en las estadísticas base.

- evoluciones.jsx
    - Muestra la cadena de evolución de un Pokémon, mostrando sus formas anteriores y siguientes, si las hay. Este componente representa visualmente el proceso de evolución.

- movimientos.jsx
    - Descripción: Enumera los movimientos que un Pokémon puede aprender. Incluye información como el tipo de movimiento, potencia y precisión.

- navbar.jsx
    - Descripción: Implementa la barra de navegación para el proyecto, facilitando la navegación del usuario entre diferentes componentes y secciones de la aplicación.

# COMO INSTALAR
## Estos son los pasos que hay que seguir para poder utilizar el proyecto en un localhost.
1. Desde la consola de comandos ponemos:
~~~
git clone https://github.com/EquipoRaimon/ReactProjects.git
~~~
Esto hará que se nos descargue el repositorio entero de ReactProjects.

2. Luego accedemos a donde se haya guardado el proyecto desde la consola de comandos. Para moverse en la cmp se usa el comando cd seguido de la dirección donde esté guardado 
Debería quedar algo así:

    - cd C:\LaDireccionQueSea\ReactProjects\PokedexApp-Victor

4. Habiendo accedido ya a la carpeta del proyecto, procedemos a instalar las dependencias necesarias para ejecutarlo mediante este comando:
~~~
npm install
~~~
4. Finalmente ejecutamos este último comando y copiamos el enlace que saldrá en un navegador.
~~~
npm run dev
~~~

