# Clima Click - Módulo 4

¡Hola! Soy Camila y este es mi proyecto para el Módulo 4. En esta etapa me enfoqué en agregar lógica JavaScript real a la app: modelar los datos de clima usando arreglos y objetos, calcular estadísticas semanales y mostrar todo dinámicamente en el DOM.

## ¿Qué mejoré en esta versión?

* **Modelado de datos en JavaScript**: Cada ciudad es un objeto con `id`, `nombre`, `tempActual`, `estadoActual` y un arreglo `pronosticoSemanal` con 7 días (mín, máx, estado). Nada está "quemado" en el HTML.
* **Funciones reutilizables**: Creé `buscarCiudad()` para encontrar una ciudad por id o nombre, y `calcularEstadisticas()` que recorre el pronóstico con ciclos y devuelve un objeto con los resultados.
* **Ciclos y condicionales**: Uso `for` para recorrer el pronóstico y calcular mínima, máxima, promedio y conteo de días por tipo de clima. Uso `if/else` para generar el resumen textual automáticamente.
* **Manipulación del DOM**: Las cards del home y toda la vista de detalle (pronóstico + estadísticas) se generan 100% desde JavaScript.
* **Diseño actualizado**: Incorporé el diseño oscuro/morado del Módulo 7 como evolución visual del proyecto.

## Modelado de datos

Cada ciudad tiene esta estructura:

```javascript
{
    id: 1,
    nombre: "Antofagasta",
    tempActual: 22,
    estadoActual: "Despejado",
    icono: "fas fa-sun",
    pronosticoSemanal: [
        { dia: "Lunes", min: 18, max: 24, estado: "Soleado" },
        // 7 días...
    ]
}
```

## Estadísticas que calcula la app

* Temperatura mínima de la semana
* Temperatura máxima de la semana
* Temperatura promedio de la semana
* Conteo de días por tipo de clima (Soleado, Nublado, Lluvioso, Parcial, etc.)
* Resumen textual generado automáticamente según el clima predominante

## ¿Cómo revisar el proyecto?

Abre el archivo `index.html` en tu navegador. Los estilos vienen de `css/main.css` y la lógica de `assets/js/datos.js` y `assets/js/script.js`.

## Repositorio

https://github.com/camilaandreamh/weather-frontend-m4

## Autora

Camila Andrea Molina Hernández — Coronel, Chile — 2026
