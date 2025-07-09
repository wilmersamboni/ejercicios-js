const palos = ["Corazones", "Picas", "Tréboles", "Diamantes"];
const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const crearCarta = (palo, valor) => ({
  palo,
  valor,
  toString() {
    return `${valor} de ${palo}`;
  }
});

const crearBaraja = () => {
  const baraja = []; // se almacenaran las cartas
  for (const palo of palos) {  // se itera sobre el array palos
    for (const valor of valores) { // se itera sobre el arrya valores
      baraja.push(crearCarta(palo, valor)); // para cada combinacion se llama a la funcion crear, para crear una carta
    }
  }
  return baraja;
};

// Uso
const baraja = crearBaraja();
console.log(baraja.length); 
console.log(baraja[25].toString()); 
