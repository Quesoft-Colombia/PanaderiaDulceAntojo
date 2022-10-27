const express = require("express");
const productoSchema = require("../db/models/productos.model.js");

const router = express.Router();

//crear usuario
router.post("/productos", (req, res) => {
    const producto = productoSchema(req.body);
    //console.log(req.body.toString());
    producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({mesage: error}));
    //console.log('Usuario creado Correctamente');
});

//trAERtodos los usuarios
router.get("/productos", (req, res) => {
    
    productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({mesage: error}));
    //console.log('Usuario creado Correctamente');
});
router.get("/productos/:id", (req, res) => {
    const {id} = req.params;
    productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({mesage: error}));
    //console.log('Usuario creado Correctamente');
});
router.put("/productos/:id", (req, res) => {
    const {id} = req.params;
    const {nombreP, precio, stock, categoria} = req.body;
    productoSchema
    .updateOne({_id: id}, {$set:{nombreP, precio, stock, categoria}})
    .then((data) => res.json(data))
    .catch((error) => res.json({mesage: error}));
    //console.log('Usuario creado Correctamente');
});
router.delete("/productos/:id", (req, res) => {
    const {id} = req.params;
    productoSchema
    .remove({_id: id})
    .then((data) => res.json(data))
    .catch((error) => res.json({mesage: error}));
    //console.log('Usuario creado Correctamente');
});
module.exports = router;