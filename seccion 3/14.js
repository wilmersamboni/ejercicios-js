const finobazzi = (n) =>{
    const serie = [0, 1]; // la serie fibonacci siempre empieza por 0 y 1
    let siguiente = serie[0] +serie[1]; // se calcula el proximo numero
    while (siguiente <= n) {
        serie.push(siguiente); //se agregar el numero a una lista
        siguiente = serie[serie.length-1] + serie[serie.length-2]; // se calcula el nuevo numero sumando los dos ultimos numeros de la lista
    }
    return serie
}
console.log(finobazzi(20)); 