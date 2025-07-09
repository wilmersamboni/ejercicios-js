const palabras =(palabras, n)=>{
    const resultado =[];
    for (const palabra of palabras) {
        if (palabra.length >= n) {
            resultado.push(palabra);
        }
    }
    return resultado;
}
console.log(palabras(['hola', 'adios', 'buenos dias', 'buenas noches'], 5)); 