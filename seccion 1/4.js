const suma =(arr)=> {
    const resultado=[];
    for (let i = 0; i < arr.length; i++) {
        resultado.push(arr[i]+arr[i+1]);
    }
    return resultado;
}
console.log(suma([1,2,3,4,5])); 