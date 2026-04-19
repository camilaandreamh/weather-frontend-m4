// =============================================
// MÓDULO 4 — Clima Click
// Modelo de datos: arreglo de objetos con
// pronóstico semanal para cada ciudad
// Autora: Camila Andrea Molina Hernández
// =============================================

const ciudades = [
    {
        id: 1,
        nombre: "Antofagasta",
        tempActual: 22,
        estadoActual: "Despejado",
        icono: "fas fa-sun",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 18, max: 24, estado: "Soleado" },
            { dia: "Martes",    min: 17, max: 23, estado: "Soleado" },
            { dia: "Miércoles", min: 19, max: 25, estado: "Despejado" },
            { dia: "Jueves",    min: 18, max: 24, estado: "Soleado" },
            { dia: "Viernes",   min: 16, max: 22, estado: "Nublado" },
            { dia: "Sábado",    min: 17, max: 23, estado: "Soleado" },
            { dia: "Domingo",   min: 18, max: 24, estado: "Despejado" }
        ]
    },
    {
        id: 2,
        nombre: "La Serena",
        tempActual: 19,
        estadoActual: "Nublado",
        icono: "fas fa-cloud",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 15, max: 20, estado: "Nublado" },
            { dia: "Martes",    min: 14, max: 19, estado: "Nublado" },
            { dia: "Miércoles", min: 16, max: 21, estado: "Parcial" },
            { dia: "Jueves",    min: 15, max: 20, estado: "Nublado" },
            { dia: "Viernes",   min: 13, max: 18, estado: "Lluvioso" },
            { dia: "Sábado",    min: 14, max: 19, estado: "Nublado" },
            { dia: "Domingo",   min: 15, max: 20, estado: "Parcial" }
        ]
    },
    {
        id: 3,
        nombre: "Viña del Mar",
        tempActual: 18,
        estadoActual: "Parcial",
        icono: "fas fa-cloud-sun",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 14, max: 19, estado: "Parcial" },
            { dia: "Martes",    min: 15, max: 20, estado: "Soleado" },
            { dia: "Miércoles", min: 13, max: 18, estado: "Nublado" },
            { dia: "Jueves",    min: 14, max: 19, estado: "Parcial" },
            { dia: "Viernes",   min: 12, max: 17, estado: "Lluvioso" },
            { dia: "Sábado",    min: 14, max: 19, estado: "Parcial" },
            { dia: "Domingo",   min: 15, max: 20, estado: "Soleado" }
        ]
    },
    {
        id: 4,
        nombre: "Santiago",
        tempActual: 28,
        estadoActual: "Soleado",
        icono: "fas fa-sun",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 22, max: 30, estado: "Soleado" },
            { dia: "Martes",    min: 21, max: 29, estado: "Soleado" },
            { dia: "Miércoles", min: 20, max: 28, estado: "Despejado" },
            { dia: "Jueves",    min: 22, max: 31, estado: "Soleado" },
            { dia: "Viernes",   min: 19, max: 27, estado: "Parcial" },
            { dia: "Sábado",    min: 21, max: 29, estado: "Soleado" },
            { dia: "Domingo",   min: 20, max: 28, estado: "Despejado" }
        ]
    },
    {
        id: 5,
        nombre: "Concepción",
        tempActual: 16,
        estadoActual: "Llovizna",
        icono: "fas fa-cloud-rain",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 12, max: 17, estado: "Lluvioso" },
            { dia: "Martes",    min: 11, max: 16, estado: "Lluvioso" },
            { dia: "Miércoles", min: 13, max: 18, estado: "Nublado" },
            { dia: "Jueves",    min: 12, max: 17, estado: "Lluvioso" },
            { dia: "Viernes",   min: 10, max: 15, estado: "Lluvioso" },
            { dia: "Sábado",    min: 12, max: 17, estado: "Nublado" },
            { dia: "Domingo",   min: 13, max: 18, estado: "Parcial" }
        ]
    },
    {
        id: 6,
        nombre: "Coronel",
        tempActual: 15,
        estadoActual: "Nublado",
        icono: "fas fa-cloud",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 11, max: 16, estado: "Nublado" },
            { dia: "Martes",    min: 10, max: 15, estado: "Lluvioso" },
            { dia: "Miércoles", min: 12, max: 17, estado: "Nublado" },
            { dia: "Jueves",    min: 11, max: 16, estado: "Nublado" },
            { dia: "Viernes",   min: 10, max: 15, estado: "Lluvioso" },
            { dia: "Sábado",    min: 12, max: 17, estado: "Parcial" },
            { dia: "Domingo",   min: 13, max: 18, estado: "Nublado" }
        ]
    },
    {
        id: 7,
        nombre: "Temuco",
        tempActual: 14,
        estadoActual: "Lluvia",
        icono: "fas fa-cloud-showers-heavy",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 10, max: 15, estado: "Lluvioso" },
            { dia: "Martes",    min: 9,  max: 14, estado: "Lluvioso" },
            { dia: "Miércoles", min: 11, max: 16, estado: "Nublado" },
            { dia: "Jueves",    min: 10, max: 15, estado: "Lluvioso" },
            { dia: "Viernes",   min: 8,  max: 13, estado: "Lluvioso" },
            { dia: "Sábado",    min: 10, max: 15, estado: "Nublado" },
            { dia: "Domingo",   min: 11, max: 16, estado: "Parcial" }
        ]
    },
    {
        id: 8,
        nombre: "Puerto Montt",
        tempActual: 12,
        estadoActual: "Chubascos",
        icono: "fas fa-cloud-meatball",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 8,  max: 13, estado: "Lluvioso" },
            { dia: "Martes",    min: 7,  max: 12, estado: "Lluvioso" },
            { dia: "Miércoles", min: 9,  max: 14, estado: "Nublado" },
            { dia: "Jueves",    min: 8,  max: 13, estado: "Lluvioso" },
            { dia: "Viernes",   min: 7,  max: 12, estado: "Lluvioso" },
            { dia: "Sábado",    min: 9,  max: 14, estado: "Nublado" },
            { dia: "Domingo",   min: 10, max: 15, estado: "Parcial" }
        ]
    },
    {
        id: 9,
        nombre: "Valparaíso",
        tempActual: 17,
        estadoActual: "Viento",
        icono: "fas fa-wind",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 13, max: 18, estado: "Parcial" },
            { dia: "Martes",    min: 14, max: 19, estado: "Soleado" },
            { dia: "Miércoles", min: 12, max: 17, estado: "Nublado" },
            { dia: "Jueves",    min: 13, max: 18, estado: "Parcial" },
            { dia: "Viernes",   min: 11, max: 16, estado: "Nublado" },
            { dia: "Sábado",    min: 13, max: 18, estado: "Parcial" },
            { dia: "Domingo",   min: 14, max: 19, estado: "Soleado" }
        ]
    },
    {
        id: 10,
        nombre: "Rancagua",
        tempActual: 25,
        estadoActual: "Despejado",
        icono: "fas fa-sun",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 19, max: 26, estado: "Soleado" },
            { dia: "Martes",    min: 18, max: 25, estado: "Soleado" },
            { dia: "Miércoles", min: 20, max: 27, estado: "Despejado" },
            { dia: "Jueves",    min: 19, max: 26, estado: "Soleado" },
            { dia: "Viernes",   min: 17, max: 24, estado: "Parcial" },
            { dia: "Sábado",    min: 18, max: 25, estado: "Soleado" },
            { dia: "Domingo",   min: 19, max: 26, estado: "Despejado" }
        ]
    },
    {
        id: 11,
        nombre: "Talca",
        tempActual: 24,
        estadoActual: "Despejado",
        icono: "fas fa-sun",
        pronosticoSemanal: [
            { dia: "Lunes",     min: 18, max: 25, estado: "Soleado" },
            { dia: "Martes",    min: 17, max: 24, estado: "Soleado" },
            { dia: "Miércoles", min: 19, max: 26, estado: "Despejado" },
            { dia: "Jueves",    min: 18, max: 25, estado: "Soleado" },
            { dia: "Viernes",   min: 16, max: 23, estado: "Parcial" },
            { dia: "Sábado",    min: 17, max: 24, estado: "Soleado" },
            { dia: "Domingo",   min: 18, max: 25, estado: "Despejado" }
        ]
    }
]
