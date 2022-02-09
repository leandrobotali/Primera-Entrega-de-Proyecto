const express = require('express');
const router = express.Router();

const Producto = require('../producto');

const { isAdmin } = require('../middleware/auth')

/* GET home page. */
router.get('/:id?', function(req, res, next) {
    if(req.params.id){
        res.status(201).send(Producto.getById(req.params.id))
    }else{
        res.status(201).send(Producto.getAll())
    }
});

router.post('/', function(req, res, next) {
    if (req.body.nombre !== undefined && req.body.descripcion !== undefined && req.body.codigo !== undefined && req.body.foto !== undefined && req.body.precio !== undefined &&  req.body.stock !== undefined) {
        let fyh = new Date();

        let fyhActual = fyh.getDate() + '/' + ( fyh.getMonth() + 1 ) + '/' + fyh.getFullYear() + " - " + fyh.getHours() + ':' + fyh.getMinutes() + ':' + fyh.getSeconds()

        res.status(201).send(Producto.save(fyhActual,req.body.nombre, req.body.descripcion, req.body.codigo, req.body.foto, req.body.precio, req.body.stock));
    }
    else{
        res.status(400).send({error: "datos incorrectos"})
    }
});

router.put('/:id', function(req, res, next) {    
    res.status(201).send(Producto.updateById(req.params.id, req.body.timestamp, req.body.nombre, req.body.descripcion, req.body.codigo, req.body.foto, req.body.precio, req.body.stock))
});

router.delete('/:id', function(req, res, next) {
    res.send(Producto.deleteById(req.params.id))
});

module.exports = router;