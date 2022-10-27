const mongoose = require("mongoose");
const produtSchema = mongoose.Schema({
    nombreP:
    {
        type: String,
        require: [true, 'nombre de producto requerido']
    },
    precio:
    {
        type: Number,
        require: [true, 'precio de producto requerido']
    },
    stock:
    {
        type: Number,
    },
    categoria:
    {
        type: String,
        require:[true, 'es requerido seleccionar una de las siguientes  categorias de productos Panaderia, Lacteos, Gaseosas '],
        enum: {
            values: ['Panaderia', 'Lacteos', 'Gaseosas'],
            message: '{VALUE} no hace parte de categoria de productos '
          }
    }

})

module.exports = mongoose.model('Productos', produtSchema);