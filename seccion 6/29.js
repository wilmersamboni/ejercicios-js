
const preguntas = [
    {
    texto:"¿ cual es la capital de venezuela?",
    opciones: ["londres","caracas","paris"],
    respuesta:"caracas"
    },
    {
    texto:"¿ cual es la raiz cuadrade de 9 ?",
    opciones: ["5","8","3"],
    respuesta:"3"
    },
    {
    texto:"¿cuantos dias tiene un año viciesto?",
    opciones: ["366","355","365"],
    respuesta:"366"
    }
];
const jugarTrivia = (respuestasUsuario) => {
  let puntaje = 0;
  preguntas.forEach((pregunta, index) => { // se accede a las preguntas creadas 
    if (pregunta.respuesta === respuestasUsuario[index]) {  // se accede a respuesta de la pregunta y luego a la respuesta del usuario y se comparan 
      puntaje++; // si condicion es verdadera el puntaje se incrementa en 1
    }
  });
  return `Puntaje final: ${puntaje} / ${preguntas.length}`;
};

console.log(jugarTrivia(["caracas", "5", "366"]));
