const mongoose = require ("mongoose");
const pedidosSchema = mongoose.Schema({
    fechaentrega: 
    { 
        type: Date, 
        default: new Date,
        require:[true, 'fecha de entrega requerida']
    },
    horaentrega: 
    {
        type: Date, 
        default: Date.prototype.getHours,
        require:[true, 'Hora de entrega requerida'] 
    },
    nombre: 
    {
        type: String, 
        require:[true, 'Registra nombre del cliente es requerido']
    
    },
    telefono: 
    {
        type: Number, require: true,
        require:[true, 'Registra telefono o celular del cliente es requerido']
    },
    descripcion: 
    {
        type: String
    },
},
    {
        timestamps: {
            createdAt: 'creado',
            updatedAt: 'actualizado'
        }
    }
);    
module.exports = mongoose.model('Pedidos', pedidosSchema);