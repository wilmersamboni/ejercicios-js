function productoDeTres(arr) {
  if (arr.length < 3) return null; // si el arreglo tiene menos de 3 elementos no funciona el codigo

  // Ordenamos el arreglo
  arr.sort((a, b) => a - b); //sort ordena el arreglo de menor a mayor 

  const n = arr.length; //se guarda la longitud del arreglo

  // Caso 1: los tres mayores
  const producto1 = arr[n - 1] * arr[n - 2] * arr[n - 3];  // se calcula el producto de los 3 mas grandes
  // Caso 2: los dos menores (negativos) y el mayor positivo
  const producto2 = arr[0] * arr[1] * arr[n - 1];  //calcula el producto de los dos mas pequenos 

  return Math.max(producto1, producto2);
}

// Ejemplo
const numeros = [-10, -10, 1, 3, 2];
console.log(maxProductoDeTres(numeros)); // Salida: 300
