const mongoose = require('mongoose');
require('dotenv').config();
const permiso = process.env.PERMISO;
const urlDesarrollo = `mongodb+srv://mondongo:${permiso}@cluster0.bjafrn2.mongodb.net/?retryWrites=true&w=majority`
const url = 'mongodb://127.0.0.1:27017/shop';
const db = mongoose.connection;

mongoose.connect(url, {useNewUrlParser: true,useUnifiedTopology: true,})
    .catch(e => console.log(e));

db.once('open', () => {
    console.log('Conexion a la base exitosa '+url);
})