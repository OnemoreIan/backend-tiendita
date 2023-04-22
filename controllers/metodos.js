const metodos = {
  general: (req, res) => {
    res.send("Exito");
  },
  articulo: (req, res) => {
    async function obtencion() {
      const respuesta = await Products.find();
      res.send(respuesta);
    }
    obtencion();
  },
  PostArticulo: (req, res) => {
    const info = req.body;
    console.log(info);
    res.send(`Datos recibidos de post\n${info}`);
  },
  PutArticulo: (req, res) => {
    res.send("Put listo");
  },
  PatchArticulo: (req, res) => {
    res.send("Patch listo");
  },
  DelArticulo: (req, res) => {
    res.send("Delete listo");
  },
};

module.exports = metodos;
