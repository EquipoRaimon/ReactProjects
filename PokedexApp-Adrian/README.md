# Pokédex App

---

Este repositorio contiene una aplicación web de la Pokédex desarrollada con React. La aplicación muestra una lista de Pokémon y permite buscar Pokémon por nombre, tipo o número de Pokédex. Utiliza la PokeAPI para obtener información sobre los Pokémon.

## Componentes

La aplicación está compuesta por varios componentes React que se encargan de diferentes aspectos de la interfaz de usuario. A continuación se describen los principales componentes:

1. **NavBar**: Este componente muestra la barra de navegación en la parte superior de la aplicación. Permite seleccionar una generación de Pokémon, activar/desactivar la visualización de Pokémon Shiny y buscar Pokémon por nombre, tipo o número de Pokédex.

2. **PokeCardList**: Este componente muestra una lista de tarjetas de Pokémon. Puede filtrar la lista de Pokémon por generación y tipo. También puede seleccionar un Pokémon de la lista para ver detalles adicionales.

3. **PokeCardSmall**: Este componente muestra una tarjeta compacta de un Pokémon. Se utiliza para mostrar una vista previa de un Pokémon en la lista principal.

4. **PokeImage**: Componente que muestra la imagen de un Pokémon. Puede mostrar la imagen normal o la variante Shiny.

5. **PokeCardBig**: Representa una tarjeta grande de un Pokémon en la aplicación. Muestra detalles completos sobre el Pokémon, incluyendo su imagen, número de Pokédex, nombre, tipos y pestañas para ver información adicional como datos básicos, estadísticas, cadena evolutiva y movimientos.

6. **PokeDatos**: Componente que muestra información detallada sobre un Pokémon, como su descripción, especie, altura, peso, habilidades y ubicaciones de captura.

7. **PokeStats**: Componente que muestra las estadísticas base de un Pokémon, como puntos de salud, ataque, defensa, etc.

8. **PokeMoves**: Componente que muestra una lista de movimientos que puede aprender un Pokémon.

9. **PokeEvo**: Componente que muestra la cadena evolutiva de un Pokémon, incluidas todas sus evoluciones.

10. **PokeCadenaEvo**: Componente auxiliar utilizado por PokeEvo para mostrar una cadena evolutiva específica.

11. **Loading**: Componente que muestra un indicador de carga mientras se cargan los datos de la lista de Pokémon.

## Instalación

1. Clona este repositorio en tu máquina local usando Git:
~~~
git clone https://github.com/EquipoRaimon/ReactProjects.git
~~~

2. Navega al directorio que contiene el proyecto
~~~
cd C:\LaDireccionQueSea\ReactProjects\PokedexApp-Adrian
~~~

3. Instala las dependencias en ese directorio
~~~
npm install
~~~
4. Ejecuta el proyecto
~~~
npm run dev
~~~

¡Ya está! Ahora a disfrutar esta pokedex.
---