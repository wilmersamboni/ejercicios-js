const crear = (titulo, autor, año) => {
    return {
        titulo,
        autor,
        año,
        resumen(){
            return `${this.titulo} fue escrito por ${this.autor} en el año ${this.año}`;
        },
        antiguo(){
            return (new Date().getFullYear() - this.año) > 20;
        }
    }
}
const libro = crear('El señor de los anillos', 'J.R.R. Tolkien', 2014);
console.log(libro.resumen()); // "El señor de los anillos fue escrito por J.R.R. Tolkien en el año 1954"
console.log(libro.antiguo()); // true