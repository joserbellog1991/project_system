const express = require("express");
const routeCliente = require("./clientes.route");
const routePropiedades = require("./propiedades.route");
const routeSistemas = require("./sistemas.route");
const routeElementos = require("./elementos.route");



const apiRouter= (app)=>{
   
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/clientes',routeCliente);
    router.use('/propiedades',routePropiedades);
    router.use('/sistemas',routeSistemas);
    router.use('/sistemas',routeElementos);

}

module.exports = apiRouter;