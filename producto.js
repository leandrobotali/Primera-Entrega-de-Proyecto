class Producto{
    constructor(timestamp, nombre, descripcion, codigo, foto, precio, stock){
        this.timestamp = timestamp;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.codigo = codigo;
        this.foto = foto;
        this.precio = precio;
        this.stock = parseInt(stock);
    }
}

let Productos = [{
    "id": "1",
    "timestamp": "9/2/2022 - 1:21:41",
    "nombre": "Zapatilla",
    "descripcion": "zapatillas marca adidas color negras",
    "codigo": "2",
    "foto": "https://via.placeholder.com/150",
    "precio": "10000",
    "stock": "5"
}, {
    "id": "2",
    "timestamp": "9/2/2022 - 1:21:41",
    "nombre": "Zapato",
    "descripcion": "zapato hombre marca ringo",
    "codigo": "3",
    "foto": "https://via.placeholder.com/150",
    "precio": "8000",
    "stock": "6"
}, {
    "id": "3",
    "timestamp": "9/2/2022 - 1:21:41",
    "nombre": "alpargata",
    "descripcion": "alpargatas unisex color blancas",
    "codigo": "7",
    "foto": "https://via.placeholder.com/150",
    "precio": "2000",
    "stock": "4"
}];

function getAll(){
    return Productos
}

function save(timestamp, nombre, descripcion, codigo, foto, precio, stock){
    let obj = new Producto(timestamp, nombre, descripcion, codigo, foto, precio, stock)

    let idMasAlto = 0;

    if (Productos.length > 0) {
        idMasAlto = Productos.reduce((acum, proximo) => acum > proximo.id ? acum : proximo.id, 0);
    }
    obj.id = parseInt(idMasAlto) + 1

    Productos.push(obj);

    return obj
}

function getById(id) {
    const objError = { "error": "producto no encontrado" }
    const find = Productos.find(producto => producto.id == id) || objError;
    return find
}

function updateById(id, timestamp, nombre, descripcion, codigo, foto, precio, stock) {
    const objError = { "error": "producto no encontrado" }
    const find = Productos.find(producto => producto.id == id) || objError;
    if (find !== objError) {
        find.timestamp = timestamp;
        find.nombre = nombre;
        find.descripcion = descripcion;
        find.codigo = codigo;
        find.foto = foto;
        find.precio = precio;
        find.stock = stock;;
    }

    return find
}

function deleteById(id) {
    const objError = { "error": "producto no encontrado" }
    const find = Productos.find(producto => producto.id == id) || objError;
    if (find !== objError) {
        Productos = Productos.filter(producto => producto.id != id);

        return Productos
    } else {
        return find
    }
}

module.exports ={Producto, Productos, getAll, save, getById, updateById, deleteById};