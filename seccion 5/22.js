const entero =(n)=>{
    const romanos={
        I: 1, V: 5, X: 10, L: 50,
         C: 100, D: 500, M: 1000
    }
    let ente=0;
    for (let i=0;i<n.length;i++){
        const valorActual=romanos[n[i]];// se obtiene el valor del caracter actual
        const valorSiguiente=romanos[n[i+1]];

        if (valorSiguiente && valorActual < valorSiguiente){ // se verifica si existe un siguiente valor y se compara si es menor o mayor con el actual

        ente-=valorActual;
        }
        else {
            ente+=valorActual
        }
    }
    return ente
}
console.log(entero('XIV'))