const contrasenaSegura =(longitud, opciones)=>{
    const MAYUSCULAS ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const minus = "abcdefghijklmnopqrstuvwxyz";
    const nums = "0123456789";
    const simbolos = "!@#$%^&*()_+[]";

    let caracteres = minus; // estandar de caracter
    if (opciones.MAYUSCULAS) caracteres+= MAYUSCULAS; // si opcion mayusculas es true se le agrega caracteres en mayusculas
    if (opciones.nums)caracteres+=nums;
    if (opciones.simbolos)caracteres+=simbolos;

    let contrasena=""; //almacenar la contrasena
    for (let i=0; i< longitud;i++){ //se recorre o itera hasta la longitud de la contrasena que se desea
        const random = Math.floor(Math.random()* caracteres.length); //math.ramdom genera numeros aleatorios y caracteres.llength es la logitud de las minus
        contrasena+= caracteres[random]
    }
    return contrasena;

}
console.log(contrasenaSegura(8,{MAYUSCULAS:false, nums:true, simbolos:false}))