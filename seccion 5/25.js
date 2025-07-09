function rutaMinima(matriz, inicio, fin) {
    const filas = matriz.length;
    const columnas = matriz[0].length;

    const direcciones = [
        [-1, 0], // arriba
        [1, 0],  // abajo
        [0, -1], // izquierda
        [0, 1]   // derecha
    ];

    // Validar si una celda es válida
    function esValido(x, y) {
        return x >= 0 && x < filas && y >= 0 && y < columnas && matriz[x][y] === 0;
    }

    const visitado = new Set();
    const cola = [];

    cola.push([inicio[0], inicio[1], 0]); // x, y, pasos
    visitado.add(`${inicio[0]}-${inicio[1]}`);

    while (cola.length > 0) {
        const [x, y, pasos] = cola.shift();

        if (x === fin[0] && y === fin[1]) {
            return pasos; // Ruta encontrada
        }

        for (let [dx, dy] of direcciones) {
            const nx = x + dx;
            const ny = y + dy;

            if (esValido(nx, ny) && !visitado.has(`${nx}-${ny}`)) {
                cola.push([nx, ny, pasos + 1]);
                visitado.add(`${nx}-${ny}`);
            }
        }
    }

    return -1; // No hay ruta posible
}

// Ejemplo
const matriz = [
    [0, 0, 1, 0],
    [1, 0, 1, 0],
    [0, 0, 0, 0],
    [1, 1, 1, 0]
];

const inicio = [0, 0];
const fin = [3, 3];

console.log(rutaMinima(matriz, inicio, fin)); 
