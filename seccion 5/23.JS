
const RLE = (str)=> {

    let resultado="";
    let contador = 1;


    for (let i=1; i<=str.length;i++){ // se itera cada caracter
        if (str[i]===str[i-1]){ //se compra cada caracter con el anterior
            contador++; // si el igual al anterior se aumenta en uno el contador 
        }
        else{
            resultado+= str[i-1]+contador; // se agrega el anterior caracter y el valor del contador 
            contador=1; // se restablece el contador para que inicie una nueva secuencia
        }
    }

 return resultado;
};
console.log (RLE("aaabcccc"))