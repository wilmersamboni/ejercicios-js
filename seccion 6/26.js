let tareas = [];

const agregarTarea = (desc) => {
  const nueva = { id: Date.now(), desc, done: false };
  tareas.push(nueva);
};

const completarTarea = (id) => {
  const tarea = tareas.find(t => t.id === id);
  if (tarea) tarea.done = true;
};

const eliminarTarea = (id) => {
  tareas = tareas.filter(t => t.id !== id);
};

const listarPendientes = () => {
  return tareas.filter(t => !t.done);
};


agregarTarea("Estudiar JavaScript");
agregarTarea("Leer documentación de React");
eliminarTarea("Estudiar Java")
console.log(listarPendientes());
