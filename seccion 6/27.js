const catalogo = [
  { id: 1, nombre: "Camisa", precio: 20 },
  { id: 2, nombre: "Pantalón", precio: 40 }
];

let carrito = []

const agregarCarrito=(id, cantidad)=>{
    const producto = catalogo.find (p=> p.id===id)
    if (producto){
        carrito.push({...producto, cantidad})
    }
}
const calcularTotales = () => {
  let subtotal = 0;
  for (const item of carrito) {
    subtotal += item.precio * item.cantidad;
  }
  const descuento = subtotal > 100 ? subtotal * 0.1 : 0;
  const total = (subtotal - descuento) * 1.19; // con IVA del 19%
  return { subtotal, descuento, total };
};
agregarCarrito(1,7);
console.log(calcularTotales())