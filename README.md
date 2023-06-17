# Aplicación para la visualización y reproducción de podcasts

Este repositorio es una Single Page Application para la visualización y reproducción de podcasts musicales creada con [Create React App](https://github.com/facebook/create-react-app), que se ejecuta en el navegador e incorpora dos modos de ejecución: modo _development_ y modo _production_.

### Tecnologías utilizadas

A fin de simplificar el proyecto he utilizado las minimas librerias posibles, con preferencia de aquellas que habitualmente se utilizan en proyectos React de este tipo. Así he optado por las siguientes:

- react-router-dom
- node-sass
- date-fns
- Axios

### Tecnologias de mejora

- Agregar más tests para garantizar la calidad.
- Elaborar un diseño más cuidado.
- Framework de css.

No implementadas en este proyecto por la limitacion temporal.

## Primeros pasos

### Clonar el repositorio

Para clonar el repositorio es necesario tener instalado [Git](http://git-scm.com), y después se debe ejecutar la siguiente instrucción:

```
git clone https://github.com/Florian759/podcasts
```

### Instalar las dependencias

Para instalar las dependencias es necesario tener instalado un gestor de dependencias como [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) y ejecutar la siguiente instrucción.

```
npm install
```

## Ejecución de la aplicación
Create React app predetermina dos modos de ejecución de la aplicación:

- Modo _development_, los assets se sirven sin minimizar.
- Modo _production_,  los assets se sirven concatenados y minimizados. 

### Modo _development_

Para ejecutar la aplicación en modo _development_ debemos ejecutar la siguiente orden:

```
npm start
```

Para verlo en su navegador abra [http://localhost:3000](http://localhost:3000).

- La página se volverá a cargar cuando realice cambios.
- Podrá ver errores de ejecutción en la consola.

### Modo _production_

Para ejecutar la aplicación en modo _production_ debemos ejecutar la siguiente orden:

```
npm build
```

Empaqueta correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento. La compilación se minimiza y los nombres de archivo incluyen los assets

¡La aplicación está lista para ser implementada!
