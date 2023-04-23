const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();

const enrutados = require('./routes/rutas')

//-------------midelwares and settings-----------------
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

//-------------routes-----------------
app.use('/api',enrutados);

module.exports = app;