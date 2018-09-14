// app.js
var app = new Framework7({
  root: '#app', // <-- Verwijst naar <div id="app">
  name: 'My App', // <-- Naam van de applicatie
  id: 'com.myapp.test', // <-- naam van de bundle, voor publicatie in App Stores
  panel: {
    swipe: 'left' // <-- // Swipe panel vanaf links (als je dit gebruikt)
  },
  routes: [
    // <-- Routes/pagina's binnen de app
    {
      path: '/about/',
      url: './pages/about.html'
    },
    {
      path: '/contact/',
      url: './pages/contact.html'
    },
    {
      path: '/puppies/',
      url: './pages/puppies.html'
    },
    {
      path: '/grid/',
      url: './pages/grid.html'
    },
    {
      path: '/content-block/',
      url: './pages/content-block.html'
    },
    ,
    {
      path: '/color/',
      url: './pages/color.html'
    }
  ]
  // <-- overige parameters
});

// Elke app heeft een main view, verwijst naar <div class="view view-main">
var mainView = app.views.create('.view-main');
