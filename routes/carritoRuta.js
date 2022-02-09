const express = require('express');
const router = express.Router();

const Carrito = require('../carrito');


router.post('/', function(req, res, next) {
    res.status(201).send(Carrito.CarritoNuevo());
});

router.post('/:id/productos', function(req, res, next) {
    if(req.body.idProd != undefined && req.body.nombreProd != undefined && req.body.imagen != undefined && req.body.Precio != undefined && req.body.stock != undefined){
        res.status(201).send(Carrito.agregarProd(req.params.id, req.body.idProd, req.body.nombreProd, req.body.imagen, req.body.Precio, req.body.stock));
    }else{
        res.status(400).send({error: "datos incorrectos"})
    }
});

router.get('/:id/productos', function(req, res, next) {    
    res.status(201).send(Carrito.getCarritoById(req.params.id))
});

router.delete('/:id', function(req, res, next) {
    res.send(Carrito.deleteById(req.params.id))
});

router.delete('/:id/productos/:id_Prod', function(req, res, next) {
    res.send(Carrito.deleteByIdProd(req.params.id, req.params.id_Prod))
});

module.exports = router;