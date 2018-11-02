// app.js
var app = new Framework7({
    root: '#app', // <-- Verwijst naar <div id="app">
    name: 'Google Maps project', // <-- Naam van de applicatie
    id: 'com.mindef.project02', // <-- naam van de bundle, voor publicatie in App Stores
    routes: [
        // <-- Routes/pagina's binnen de app
        {
            path: '/',
            url: './index.html'
        },
        {
            path: '/maps-component/',
            componentUrl: './pages/maps-component.html'
        }
    ]
    // <-- overige parameters
});

// Elke app heeft een main view, verwijst naar <div class="view view-main">
var mainView = app.views.create('.view-main');
