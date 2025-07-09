const parBalanceados = (cadena) => {
  const stack = [];
  const pares = { ")": "(", "]": "[", "}": "{" };

  for (const char of cadena) {
    if ("([{".includes(char)) {  //se verifica si uno de los caracteres es una apertura de parentesis
      stack.push(char);
    } else if (")]}".includes(char)) {  // se verifica que exista un cierre de parentesis
      if (stack.pop() !== pares[char]) return false;
    }
  }

  return stack.length === 0;  // si stack esta vacio quiere decir que se encontro el cierre de un parentesis 
};

console.log(parBalanceados("([]){}")); // true
console.log(parBalanceados("([)]"));   // false
