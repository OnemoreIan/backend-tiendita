require('./dbConnection');
const express = require('express');
const bodyParser = require('body-parser');
const Products = require('./models/example');
const app = express();

//-------------setings-----------------
const port = 4500;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* const nombre = ['Lampara','Tripie','Mazo','Pala'];
const precio = [900,300,250,600]

async function agregar(nombre,precio) {
    for (let i = 0; i < nombre.length; i++) {
        var elemento = new Products({
            name: nombre[i],
            price: precio[i]
        })
        await elemento.save()
            .then(dato => console.log(dato))
            .catch(e => console.log(e))
        
    }    
} */

//-------------midelwares-----------------
const enrutados = require('./routes/rutas')

//-------------routes-----------------
app.get('/',(req,res) => {
    res.send('Sin datos')
})

app.get('/articulo',(req,res) => {
    async function obtencion() {
        const respuesta = await Products.find();
        res.send(respuesta);
    }
    obtencion()
})
app.post('/articulo', (req,res) => {
    const info = req.body;
    console.log(info);
    res.send(`Datos recibidos de post\n${info}`)
})

app.put('/articulo',(req,res) => {
    res.send('Put listo')
})

app.patch('/articulo',(req,res) => {
    res.send('Editar listo')
})

app.delete('/articulo',(req,res) => {
    res.send('Borrar liso');
})
//fin de peticiones
app.use('/api',enrutados)

///-------------servidor escuchando-----------------
app.listen(port, () => {
    console.log('Servidor iniciado y escuchando '+ port);
})