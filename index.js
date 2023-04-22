require('./dbConnection');
const express = require('express');
const bodyParser = require('body-parser');
const Products = require('./models/example');
const app = express();

//-------------setings-----------------
const port = 4500;
const enrutados = require('./routes/rutas')

//-------------routes-----------------
app.use('/api',enrutados);
//ejemplo http://localhost:4500/api/<direccion>

///-------------servidor escuchando-----------------
app.listen(port, () => {
    console.log('Servidor iniciado y escuchando '+ port);
})