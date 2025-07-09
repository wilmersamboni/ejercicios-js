let inventario = [
    { id: 1, nombre: "Laptop HP", stock: 5 },
    { id: 2, nombre: "Mouse Logitech", stock: 15 },
    { id: 3, nombre: "Teclado Mecánico", stock: 0 },
    { id: 4, nombre: "Monitor 24''", stock: 3 },
    { id: 5, nombre: "Auriculares", stock: 8 },
    { id: 6, nombre: "Webcam", stock: 0 },
    { id: 7, nombre: "Impresora", stock: 2 }
];

function buscarProducto(nombre) {
    const producto = inventario.find(item => item.nombre === nombre);
    if (!producto) {
        return {
            mensaje: `Producto con nombre ${nombre} no encontrado.`
        };
    }
    return {
        mensaje: `Producto encontrado: ${producto.nombre}, Stock: ${producto.stock}`,
        producto: producto
    };
}

function venderProducto(nombre, cantidad) {
    const resultado = buscarProducto(nombre);
    const producto = resultado.producto;

    if (!producto) {
        return resultado; // Producto no encontrado
    }

    if (producto.stock < cantidad) {
        return {
            mensaje: `No hay suficiente stock para vender ${cantidad} unidades de ${producto.nombre}. Stock actual: ${producto.stock}.`
        };
    } else {
        producto.stock -= cantidad;
        return {
            mensaje: `Venta exitosa. Se han vendido ${cantidad} unidades de ${producto.nombre}. Stock restante: ${producto.stock}.`
        };
    }
}

function listarProductosConStock() {
    const productosDisponibles = inventario.filter(producto => producto.stock > 0);
    return productosDisponibles;
}

// Pruebas
console.log(buscarProducto('Auriculares'));          // Producto encontrado: Teclado Mecánico, Stock: 0
console.log(venderProducto('Laptop HP', 2));       // Venta exitosa...
console.log(listarProductosConStock());  // Lista de productos con stock > 0
