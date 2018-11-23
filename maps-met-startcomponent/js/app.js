// app.js
var app = new Framework7({
    root: '#app', // <-- Verwijst naar <div id="app">
    name: 'Google Maps project', // <-- Naam van de applicatie
    id: 'com.mindef.project02', // <-- naam van de bundle, voor publicatie in App Stores
    routes: [
        // <-- Routes/pagina's binnen de app
        {
            path: '',
            componentUrl: './pages/maps-component.html'
        },
        {
            path: '/maps-component/',
            componentUrl: './pages/maps-component.html'
        },
        {
            path: '/conferentie-p/',
            url: './pages/conferentie-page.html'
        },
        {
            path: '/conferentie-c/',
            componentUrl: './pages/conferentie-component.html'
        }
    ]
    // <-- overige parameters
});

// Elke app heeft een main view, verwijst naar <div class="view view-main">
var mainView = app.views.create('.view-main');
