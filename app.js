require('dotenv').config();

const express = require('express'); // Importando Express

const app = express(); // Crea servidor

const port = process.env.PORT || 3000; // Elegir puerto http://localhost:3000 o el que se defina en .env

app.use(express.json()); // Habilitar recepcion de jsons y parsearlos (middleware = operacion intermedia)

const filmsRoutes = require('./routes/films.routes'); // Importar Rutas

app.use('/api/film', filmsRoutes) // Habilitar rutas (primer parametro lo que te de la gana "prefijo")


app.listen(port, () => {
  // activar servidor en puerto 3000 (http://localhost:3000)
  console.log(`Server running on port ${port}`);
});

// Necesario exportar app para que se puedan ejecutar los tests correctamente
module.exports = app;