function contar(arr){
    const ocurrencias = {} //inizializa un objeto vacio para el alamcenar el conteo
    for (const elemento of arr){ //
        ocurrencias[elemento]=(ocurrencias[elemento] || 0)+1 //se accede al valor del elemento asociado
    } //si el elemento es undefined se le asigna el lugar 0 y se le suma 1
    return ocurrencias
}
const arrIngresado = [1,1,1,2,3,3]
const resultado = contar(arrIngresado)
console.log(resultado);