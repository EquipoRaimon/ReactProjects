# 01-WEATHERAPP
## Proyecto de aplicación del tiempo
Mi proyecto esta compuesto por estos componentes:
- Formulario.jsx:
    - En este componente incluye una función llamada form, la cual nos va a devolver un formulario con dos etiquetas, una input:text que será donde escribamos la ciudad de la cual queremos saber el tiempo, y otra input:submit que será el botón para enviar la información y se muestre por pantalla.
- Cuadrado.jsx
    - En este otro componente tenemos una función llamado cuadrado, la cual nos va a devolver el cuadro grande donde se mostrará el tiempo que hace hoy junto a su estado, descripción, viento, humedad …
- Cuadros.jsx:
    - En este otro componente tenemos una función llamada cuadros, la cual nos va a devolver el tipo de cuadro que se va a mostrar debajo del grande. Esta esta función nos mostrará el nombre del día, tiempo y estado, del día de la semana posterior.
- App.jsx:
    - En este otro componente tendremos una función llamada app la cual nos va a mostrar la aplicación al completo, es decir, el componente formulario, cuadrado, y cuadros, se unirán para así mostrar la aplicación completa.
    - Usaremos una constante llamada API, que a su vez con un fech la llamaremos, para así poder recoger la información de ella y mostrarla por pantalla con los demás componentes. 
    - Haremos uso de 2 estados,  el primer estado para guardar el país que escribamos por el formulario, y el segundo estado para una vez recogido el país,  conectar con la API para mostrar todos los datos de ese país por pantalla.
    - Conectamos con la API a través de una función llamada buscarPressed, la cual se ejecutará cuando pulsemos o enviemos la información del formulario.

Estos son los pasos que hay que seguir para poder utilizar el proyecto en un localhost.
1. Desde la consola de comandos ponemos:
~~~
git clone https://github.com/EquipoRaimon/ReactProjects.git
~~~
Esto hará que se nos descargue el repositorio entero de ReactProjects.

2. Luego accedemos a donde se haya guardado el proyecto desde la consola de comandos. Para moverse en la cmp se usa el comando cd seguido de la dirección donde esté guardado 
Debería quedar algo así:
cd C:\LaDireccionQueSea\ReactProjects\01-WEATHERAPP
3. Habiendo accedido ya a la carpeta del proyecto, procedemos a instalar las dependencias necesarias para ejecutarlo mediante este comando:
~~~
npm install
~~~
4. Finalmente ejecutamos este último comando y copiamos el enlace que saldrá en un navegador.
~~~
npm run dev
~~~
