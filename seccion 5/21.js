const esAnagrama = (a, b) => {
  const limpiar = (str) => str.replace(/\s/g, '').toLowerCase(); // tolowercase convierte la cadena a minusculas 
  const ordenar = (str) => limpiar(str).split('').sort().join(''); // split separa la cadena en caracteres individuales, sort ordena los caracteres alfabetica
  
  return ordenar(a) === ordenar(b); // compara las dos palabras si suscaracteres ordenados coinciden es un anagrama
};

console.log(esAnagrama('listen', 'silent')); 
console.log(esAnagrama('hola', 'aloh'));    
console.log(esAnagrama('foo', 'ofr'));     