# TodoList App
**Práctica "Tu App en la Nube: De local a global"**
<br><br>
Aplicación web de listado de tareas (ToDo List) desarrollada utilizando HTML, CSS y JavaScript que permite crear, abrir o cerrar y eliminar tareas, las cuales se almacenan en la nube utilizando Firebase Firestore, brindando persistencia y sincronización en tiempo real.
<br>

## URL Vista Web
https://javiermartbosq.github.io/DigitalizacionAppNube/

## Características
Permite realizar una gestión sencilla de las tareas, todo esto a través de una interfaz sencilla y responsiva:
<ul>
  <li>Añadir nuevas tareas</li>
  <li>Cambiar su estado entre abiertas y completadas</li>
  <li>Eliminar las tareas</li>
</ul>

## Dependencias y Tecnologías utilizadas

### Tecnologías

![ HTML](https://img.shields.io/badge/-HTML-%23e66100?style=flat&labelColor=%23ffffff&logo=html5)
![ CSS](https://img.shields.io/badge/-CSS-%231c71d8?style=flat&labelColor=%2399c1f1&logo=css)
![ JavaScript](https://img.shields.io/badge/-JavaScript-%23f6d32d?style=flat&labelColor=%235e5c64&logo=JavaScript)
![ FireBase](https://img.shields.io/badge/-FireBase-%23e01b24?style=flat&labelColor=%23f66151&logo=FireBase)
<br>

### Dependencias

<ol>
  <li>Firebase Database</li>
  <li>Navegador web con soporte para JavaScript</li>
  <li>Achivos locales: index.html, styles.css, script.js</li>
</ol>

## Ejecutar el local
<ol>
  <li>Clona o descarga el repositorio con los archivos del proyecto.</li>
  <li>Asegúrate de tener una conexión a internet (para cargar Firebase desde CDN).</li>
  <li>Abre el archivo index.html en tu navegador.</li>
  <li>En caso de querer usar una base de datos Firebase propia, asegúrate de configurar correctamente tu proyecto Firebase en el archivo script.js con tus propias credenciales de Firebase (API Key, projectId, etc.).</li>
</ol>

## Conexión con la base de datos (local y cloud)

<ol>
  <li>Para realizar la conexión de Firebase, accedemos a la consola de Firebase con una cuenta de Firebase y creamos un nuevo proyecto.</li>
  <li>En la sección "Firestore Database", creamos una nueva base de datos en el modo que necesitemos.</li>
  <li>Vamos a la sección Reglas de nuestra base de datos y ponemos el siguiente código para permitir</li>
  <li>Seguido, vamos a la configuración del proyecto, haciendo clic en el ícono de engranaje, Configuración del proyecto y despues a Tus Apps.</li>
  <li>Registramos una nueva aplicación web y copiamos la configuración de Firebase en el documento script.js:</li>
</ol>

<pre>
const firebaseConfig = {
  apiKey: "La key que tengas",
  authDomain: "El nombre de tu proyecto.firebaseapp.com",
  projectId: "Tu proyecto",
  storageBucket: "Tu proyecyto.firebasestorage.app",
  messagingSenderId: "XXXXXXXXXX",
  appId: "XXXXXXXXXX",
  measurementId: "XXXXXXXXXXX"
}; 
</pre>

Una vez hecho y hayamos guardado los cambios, nuestra base de datos estara conectada a nuestra aplicación.

## Estructura de la tabla
La aplicación hace uso de Firestone para almacenar las tareas. Cada documento dentro de la tabla Tareas tiene el siguiente formato:

<table>
  <tr>
    <th>Campo</th>
    <th>Tipo</th>
    <th>Descripción</th>
    <th>Ejemplo</th>
  </tr>
  <tr>
    <td>`title`</td>
    <td>String</td>
    <td>Título o descripción de la tarea</td>
    <td>`"Ejemplo"`</td>
  </tr>
  <tr>
    <td>`completed`</td>
    <td>Boolean</td>
    <td>Estado de la tarea (completada o no)</td>
    <td>`false`</td>
  </tr>
  <tr>
    <td>`createdAt`</td>
    <td>timestamp</td>
    <td>Fecha de creación de la tarea</td>
    <td>`00 de XXXX de 0000, 00:00 UTC+2`</td>
  </tr>
</table>

| Campo       | Tipo      | Descripción                          | Ejemplo                           |
| ----------- | --------- | ------------------------------------ | --------------------------------- |
| `title`     | string    | Título o descripción de la tarea     | `"Ejemplo"`                       |
| `completed` | boolean   | Estado de la tarea (completada o no) | `false`                           |
| `createdAt` | timestamp | Fecha de creación de la tarea        | `00 de XXXX de 0000, 00:00 UTC+2` |


## Despliegue
La aplicación ha sido desplegada en GitHub Pages. Para ello, se han subido los archivos del proyecto a un repositorio y se ha habilitadó GitHub Pages desde la rama principal o Main,, lo que permite el acceso a la aplicación desde un navegador.

## Licencia
Este proyecto ha sido realizado bajo la licencia de Creative Commons (CC).
