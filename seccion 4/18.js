const separarElementos =(arr)=>{
    const [primero, segundo, ...resto] = arr;  //... permite descomprimir valores
    return {primero, segundo, resto}; 

}
console.log(separarElementos([1,2,3,4,5,6,7]))