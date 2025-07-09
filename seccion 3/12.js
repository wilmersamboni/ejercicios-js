const piramideNumeros = (n) => {
  for (let i = 1; i <= n; i++) {
    let fila = ''; //almacena cada fila
    for (let j = 1; j <= i; j++) {  //cada fila comienza desde uno y se va aumentando
      fila += j + ' ';
    }
    console.log(fila.trim()); //trim elimina los espacios a los lados
  }
};

piramideNumeros(5);