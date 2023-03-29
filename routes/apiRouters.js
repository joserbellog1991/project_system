const express = require("express");
const routeCliente = require("./clientes.route");
const routePropiedades = require("./propiedades.route");



const apiRouter= (app)=>{
   
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/clientes',routeCliente);
    router.use('/propiedades',routePropiedades);

}

module.exports = apiRouter;