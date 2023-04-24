const Product = require("../models/products");
const Comentarios = require('../models/comentarios');
const moment = require('moment');

function hoy() {
  const fecha = new Date();
const year = fecha.getFullYear();
const month = fecha.getMonth() + 1;
const day = fecha.getDate();
const hour = fecha.getHours();
const minutes = fecha.getMinutes();
const fechaYHora = `${day}-${month}-${year} ${hour}:${minutes}`;
console.log(fechaYHora);
const actual = moment(fechaYHora, 'D-M-YYYY HH:mm').toDate();
console.log(typeof actual);
return actual
}

const metodos = {
  general: (req, res) => {
    async function obtencion() {
      const respuesta = await Product.find();
      res.send(respuesta);
    }
    obtencion();
  },

  articulo: (req, res) => {
    const { d1, d2 } = req.body;
    async function obtencion() {
      const respuesta = await Products.find();
      res.send(respuesta);
    }
    res.send(`${d1},${d2}`);
  },

  PostArticulo: (req, res) => {
    const { nombre,price, cantidad, descript } = req.body;
    const producto = new Product({
      name: nombre,
      price: price,
      quantity: cantidad,
      description: descript
    });
    async function almacenamiento() {
      await producto.save()
        .then((resp) => console.log("Producto salvado"))
        .catch((err) => console.error("Error al guardar" + err));
    };
    almacenamiento();
    res.send(`Datos recibidos de post\n${producto.name}`);
  },

  PutArticulo: (req, res) => {
    res.send("Put listo");
  },

  PatchArticulo: (req, res) => {
    res.send("Patch listo");
  },

  DelArticulo: (req, res) => {
    const { nombre } = req.body;

    res.send("No se pudo eliminar el dato");
    Product.findOneAndDelete({ name: nombre })
      .then((resp) => {
        console.log("Dato eliminado exitosamente");
        res.send("dato eliminado exitosamente");
      })
      .catch((err) => console.log("Fallo al eliminar" + err));
  },

  //comentarios

  GetComentarios: (req,res) => {
    async function GetComent() {
      const respuesta = await Comentarios.find();
      res.send(respuesta);
    }
    GetComent();
  },
  PostComentarios: (req,res) => {
    const { texto,usuario } = req.body;
    const comentario = new Comentarios({
      usuario:usuario,
      texto: texto,
      fecha: hoy()
    })
    async function guardComent() {
      await comentario.save()
        .then(resp => console.log(resp))
        .catch(err => console.error(err))
      
    }
    guardComent();
    res.send(comentario);
  },
  DeleteComentarios: (req,res) => {
    const { _id } = req.body;
    Comentarios.findOneAndDelete({_id:_id})
      .catch(e => console.log(e))
    res.send({mensage:'Eliminado exitoso'})
  }

};

module.exports = metodos;
