let estudiantes =[]

const crearEstudiante =(nombre, edad) => {
    estudiantes.push({id:Date.now(), nombre, edad})

}
const listaEstudiante=()=> estudiantes;

const actualizarEstudiante =(id, nuevoNOmbre, nuevaEdad)=> {
    const est = estudiantes.find(e=> e.id ===id);
    if (est){
        est.nombre= nuevoNOmbre
        est.edad=nuevaEdad
    }

}
const borrarEstudiante = (id) => {
  const index = estudiantes.findIndex(e => e.id === id);
  if (index !== -1) {
    estudiantes.splice(index, 1);
  }
};
crearEstudiante("juan", 23)
crearEstudiante("martin",20)
crearEstudiante("valentina", 19)
actualizarEstudiante(estudiantes[2].id, "juancho", 22)
borrarEstudiante(estudiantes[0].id)
console.log(listaEstudiante())