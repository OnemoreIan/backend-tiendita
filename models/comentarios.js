const { Schema,model } = require('mongoose');

// Obtener la fecha y hora actual
const fecha = new Date();

// Obtener el año actual
const year = fecha.getFullYear();

// Obtener el mes actual (ten en cuenta que los meses empiezan en 0)
const month = fecha.getMonth() + 1;

// Obtener el día del mes actual
const day = fecha.getDate();

// Obtener la hora actual (en formato de 24 horas)
const hour = fecha.getHours();

// Obtener los minutos actuales
const minutes = fecha.getMinutes();

// Obtener los segundos actuales
const seconds = fecha.getSeconds();

// Crear una cadena con la fecha y hora actual
const fechaYHora = `${day}-${month}-${year} ${hour}:${minutes}:${seconds}`;


const Comentario = new Schema({
    texto:{
        type:String,
        require:true
    },
    fecha:{
        type:Date,
        default:Date.now
    }
});


module.exports = model('Comentarios',Comentario);