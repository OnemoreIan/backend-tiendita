require('./dbConnection');
const app = require('./app');
const port = 4500;





//ejemplo http://localhost:4500/api/<direccion>

///-------------servidor escuchando-----------------
app.listen(port, () => {
    console.log('Servidor iniciado y escuchando '+ port);
})