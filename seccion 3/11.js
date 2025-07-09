for (let i=1; i<=100; i++){ // se itera desde el 1 hasta el 100
    let resultado=''; //para guardar los numeros que se iteran 

    if (i%3 === 0 ) resultado+='fizz';
    if (i%5 === 0 ) resultado+='buzz';
    if (i%7 === 0 ) resultado+='bazz';
    console.log (resultado || i);
}