const express = require('express');

const app = express();
const path = require('path');

// app.use(function(req,res,next){
//     req.user = {
//         nombre: "Leo",
//         is_Admin: "true"
//     };
//     next();
// })

const productosRouter = require('./routes/productos');
const carritoRouter = require('./routes/carritoRuta');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));


app.use('/api/productos', productosRouter);
app.use('/api/carrito', carritoRouter);

port = process.env.port || 8080

const server = app.listen(port,() => {
    console.log(`puerto ${server.address().port}`);
})

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Algo salio mal, volve a intentarlo');
});