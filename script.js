// =============================================
// MÓDULO 4 — Clima Click
// Lógica JavaScript: ciclos, condicionales,
// funciones y manipulación del DOM
// Autora: Camila Andrea Molina Hernández
// =============================================

// ── FUNCIÓN 1: Buscar ciudad por id o nombre ──
function buscarCiudad(valor) {
    for (let i = 0; i < ciudades.length; i++) {
        if (ciudades[i].id === valor || (typeof valor === 'string' && ciudades[i].nombre.toLowerCase() === valor.toLowerCase())) {
            return ciudades[i]
        }
    }
    return null
}

// ── FUNCIÓN 2: Calcular estadísticas del pronóstico semanal ──
function calcularEstadisticas(pronostico) {
    let tempMin = pronostico[0].min
    let tempMax = pronostico[0].max
    let sumaPromedios = 0
    const conteoClima = {}

    for (let i = 0; i < pronostico.length; i++) {
        const dia = pronostico[i]

        // Calcular mínima y máxima de la semana
        if (dia.min < tempMin) tempMin = dia.min
        if (dia.max > tempMax) tempMax = dia.max

        // Sumar para calcular promedio
        sumaPromedios += (dia.min + dia.max) / 2

        // Contar días por tipo de clima
        if (conteoClima[dia.estado]) {
            conteoClima[dia.estado]++
        } else {
            conteoClima[dia.estado] = 1
        }
    }

    const promedio = Math.round(sumaPromedios / pronostico.length)

    // Encontrar el clima más frecuente
    let climaMasFrecuente = ''
    let maxConteo = 0
    for (const estado in conteoClima) {
        if (conteoClima[estado] > maxConteo) {
            maxConteo = conteoClima[estado]
            climaMasFrecuente = estado
        }
    }

    // Generar resumen textual con condicionales
    let resumen = ''
    if (climaMasFrecuente === 'Soleado' || climaMasFrecuente === 'Despejado') {
        resumen = '☀️ Semana mayormente soleada y despejada.'
    } else if (climaMasFrecuente === 'Lluvioso') {
        resumen = '🌧️ Semana lluviosa, lleva paraguas.'
    } else if (climaMasFrecuente === 'Nublado') {
        resumen = '☁️ Semana nublada con pocas aclaraciones.'
    } else if (climaMasFrecuente === 'Parcial') {
        resumen = '⛅ Semana variable, sol con algunas nubes.'
    } else {
        resumen = '🌡️ Semana con clima variable.'
    }

    return {
        tempMin,
        tempMax,
        promedio,
        conteoClima,
        climaMasFrecuente,
        resumen
    }
}

// ── FUNCIÓN 3: Obtener icono según estado del clima ──
function obtenerIcono(estado) {
    if (estado === 'Soleado' || estado === 'Despejado') return 'fas fa-sun'
    if (estado === 'Nublado') return 'fas fa-cloud'
    if (estado === 'Lluvioso') return 'fas fa-cloud-rain'
    if (estado === 'Parcial') return 'fas fa-cloud-sun'
    return 'fas fa-thermometer-half'
}

// ── RENDERIZAR CARDS EN HOME ──
function renderizarHome() {
    const contenedor = document.getElementById('contenedor-clima')
    if (!contenedor) return

    contenedor.innerHTML = ''

    for (let i = 0; i < ciudades.length; i++) {
        const ciudad = ciudades[i]
        const cardHTML = `
            <div class="col">
                <article class="place-card">
                    <header class="place-card__header">
                        <h3 class="place-card__title">${ciudad.nombre}</h3>
                    </header>
                    <div class="place-card__body">
                        <i class="${ciudad.icono} fa-3x my-3"></i>
                        <div class="place-card__temp">${ciudad.tempActual}°C</div>
                        <p class="place-card__status">${ciudad.estadoActual}</p>
                    </div>
                    <div class="place-card__footer">
                        <a href="detalle.html?id=${ciudad.id}" class="btn-primary w-100">Ver detalle</a>
                    </div>
                </article>
            </div>
        `
        contenedor.innerHTML += cardHTML
    }
}

// ── RENDERIZAR DETALLE ──
function renderizarDetalle() {
    const contenedor = document.getElementById('detalle-container')
    if (!contenedor) return

    const params = new URLSearchParams(window.location.search)
    const id = Number(params.get('id'))
    const ciudad = buscarCiudad(id)

    if (!ciudad) {
        contenedor.innerHTML = '<p class="text-center">Ciudad no encontrada.</p>'
        return
    }

    document.title = `${ciudad.nombre} | Clima Click`

    const stats = calcularEstadisticas(ciudad.pronosticoSemanal)

    // Construir filas del pronóstico con un ciclo
    let filasPronostico = ''
    for (let i = 0; i < ciudad.pronosticoSemanal.length; i++) {
        const dia = ciudad.pronosticoSemanal[i]
        const icono = obtenerIcono(dia.estado)
        filasPronostico += `
            <div class="pronostico-row">
                <span class="pro-dia">${dia.dia}</span>
                <i class="${icono} pro-icono"></i>
                <span class="pro-estado">${dia.estado}</span>
                <span class="pro-temps"><span class="pro-min">${dia.min}°</span> / <span class="pro-max">${dia.max}°</span></span>
            </div>
        `
    }

    // Construir conteo de climas
    let conteoHTML = ''
    for (const estado in stats.conteoClima) {
        const icono = obtenerIcono(estado)
        conteoHTML += `
            <div class="conteo-item">
                <i class="${icono}"></i>
                <span>${estado}</span>
                <strong>${stats.conteoClima[estado]} día${stats.conteoClima[estado] > 1 ? 's' : ''}</strong>
            </div>
        `
    }

    contenedor.innerHTML = `
        <div class="detail-card">
            <div class="detail-header">
                <div class="detail-icon">
                    <i class="${ciudad.icono} fa-3x"></i>
                </div>
                <div class="detail-info">
                    <h1 class="detail-city">${ciudad.nombre}</h1>
                    <p class="detail-desc">${ciudad.estadoActual}</p>
                </div>
                <div class="detail-temp">${ciudad.tempActual}°C</div>
            </div>

            <section class="pronostico-section">
                <h2 class="section-title">Pronóstico semanal</h2>
                <div class="pronostico-list">
                    ${filasPronostico}
                </div>
            </section>

            <section class="estadisticas-section">
                <h2 class="section-title">Estadísticas de la semana</h2>
                <div class="stats-grid">
                    <div class="stat-card">
                        <span class="stat-label">Mínima</span>
                        <span class="stat-value">${stats.tempMin}°C</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Máxima</span>
                        <span class="stat-value">${stats.tempMax}°C</span>
                    </div>
                    <div class="stat-card">
                        <span class="stat-label">Promedio</span>
                        <span class="stat-value">${stats.promedio}°C</span>
                    </div>
                </div>

                <div class="conteo-climas">
                    <h3 class="conteo-title">Días por tipo de clima</h3>
                    <div class="conteo-grid">
                        ${conteoHTML}
                    </div>
                </div>

                <div class="resumen-box">
                    <p class="resumen-texto">${stats.resumen}</p>
                </div>
            </section>
        </div>
    `
}

// ── INICIALIZAR SEGÚN LA PÁGINA ──
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('contenedor-clima')) {
        renderizarHome()
    }
    if (document.getElementById('detalle-container')) {
        renderizarDetalle()
    }
})
// Link de detalle en navbar apunta a ciudad aleatoria
const linkDetalle = document.querySelector('a[href="detalle.html"]')
if (linkDetalle) {
    const aleatorio = ciudades[Math.floor(Math.random() * ciudades.length)]
    linkDetalle.href = `detalle.html?id=${aleatorio.id}`
}