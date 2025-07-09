const perfecto=(num)=>{
    let suma =0; // se almacenan los numeros
    for (let i=1; i<num; i++){ //se recorre toda la ietracion
        if (num%i ===0)suma +=i;  //se suman solo los numeros que no tiene reciduo
    }
    return suma === num; // se retornan solo los que la suma de las divisiones 0 den igual al numero ingresado
}
console.log(perfecto(28));