function crearContador(inicial){
    let contador = inicial;
    return {
    inc() { // Esta función incrementa el contador en 1 y devuelve el nuevo valor          
        contador++;
        return contador;
    },
    dec() { // Esta función decrementa el contador en 1 y devuelve el nuevo valor
        contador--;
        return contador;
    },
    valor(){
        return contador; // Esta función devuelve el valor actual del contador
    }
}
}
const contador = crearContador(10);
console.log(contador.inc()); // 11
console.log(contador.dec()); // 10 
console.log(contador.valor()); // 11