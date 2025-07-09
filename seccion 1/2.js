const sinDuplicados =(arr)=> {
    const mapa={};//mapa para guardar la frecuencia
    const resultado =[]; //array para elemnto unicos

    //iterar sobre el array que tiene datos
    for (let i = 0; i < arr.length; i++) {
       const elemento = arr[i]

       //verificar que el elemento no exista
       if (!(elemento in mapa)){ //si el elemento no esta en el mapa se agregar al nuevo array
        resultado.push(elemento);
        mapa[elemento]= true; //se marca como visto o existente
       }
    }
    return resultado; //se devuelve el array sin duplicados
};
console.log(sinDuplicados([1,1,2,3,3,4]));