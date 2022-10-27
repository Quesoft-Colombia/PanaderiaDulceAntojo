//servidor express
const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const pedidosRoutes = require("./rutas/rutaPedidos");
const productosRoutes = require("./rutas/rutaProductos")

const app = express();
const port = process.env.PORT || 9000;

// middware
app.use(express.json());
app.use(pedidosRoutes, productosRoutes);


//rutas
app.get("/", (req, res) => {
    res.send("Bienvenido a esta API");
})


//coneccion a la base de datos
mongoose.connect(process.env.DB_URI2)
.then(() => console.log('Conectado a la base de datos Atlas'))
.catch((err) => console.error(err));

app.listen(port, () => console.log(`server corriendo en el puerto ${port}`));