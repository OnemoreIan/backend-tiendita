const Product = require("../models/products");
const Comentarios = require('../models/comentarios');

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
    const { texto } = req.body;
    const comentario = new Comentarios({
      texto: texto
    })
    async function guardComent() {
      await comentario.save()
        .then(resp => console.log(resp))
        .catch(err => console.error(err))
      
    }
    guardComent();
    res.send(comentario);
  }

};

module.exports = metodos;
