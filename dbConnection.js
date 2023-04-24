//Conexion con base de datos
const mongoose = require('mongoose');
require('dotenv').config();
const urlProduccion = process.env.CLOUD;
const urlDesarrollo = process.env.LOCAL;
const db = mongoose.connection;

mongoose.connect(urlProduccion, {useNewUrlParser: true,useUnifiedTopology: true,})
    .catch(e => console.log(e));

db.once('open', () => {
    console.log('Conexion a la base exitosa '+urlDesarrollo);
})