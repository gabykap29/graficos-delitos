document.addEventListener('DOMContentLoaded', function () {
    // Inicializar el mapa en una ubicación específica
    var mapa = L.map('mapa').setView([-34.6037, -58.3816], 8); // Coordenadas de Buenos Aires y nivel de zoom

    // Agregar un mapa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // Generar coordenadas aleatorias dentro de la provincia de Buenos Aires
    var coordenadas = [];
    for (var i = 0; i < 100; i++) {
        var lat = -36.6769 + Math.random() * ( -33.0563 + 36.6769 );
        var lng = -61.2278 + Math.random() * ( -56.8629 + 61.2278 );
        coordenadas.push([lat, lng]);
    }

    // Crear el mapa de calor
    L.heatLayer(coordenadas, {radius: 30, gradient: {0: 'red'}}).addTo(mapa);});