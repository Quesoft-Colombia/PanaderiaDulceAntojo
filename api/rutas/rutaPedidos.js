const express = require("express");
const pedidoSchema = require("../db/models/pedidos.model.js");

const router = express.Router();

//crear usuario
router.post("/pedidos", (req, res) => {
    const pedido = pedidoSchema(req.body);
    //console.log(req.body.toString());
    pedido
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({mesage: error}));
    //console.log('Usuario creado Correctamente');
});

//trAERtodos los usuarios
router.get("/pedidos", (req, res) => {
    
    pedidoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({mesage: error}));
    //console.log('Usuario creado Correctamente');
});
router.get("/pedidos/:id", (req, res) => {
    const {id} = req.params;
   pedidoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({mesage: error}));
    //console.log('Usuario creado Correctamente');
});
router.put("/pedidos/:id", (req, res) => {
    const {id} = req.params;
    const {fechaentrega, horaentrega, nombre, telefono, descripcion} = req.body;
    pedidoSchema
    .updateOne({_id: id}, {$set:{fechaentrega, horaentrega, nombre, telefono, descripcion}})
    .then((data) => res.json(data))
    .catch((error) => res.json({mesage: error}));
    //console.log('Usuario creado Correctamente');
});
router.delete("/pedidos/:id", (req, res) => {
    const {id} = req.params;
    pedidoSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({mesage: error}));
    //console.log('Usuario creado Correctamente');
});
module.exports = router;