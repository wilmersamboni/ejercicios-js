function invertir(caddena){
    var nuevacadena ="";
    for (var i = caddena.length - 1; i>=0 ; i--){
        nuevacadena+=caddena[i]
    }
    return nuevacadena;
}
console.log(invertir("hola mundo"));