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
console.log(libro.resumen()); 
console.log(libro.antiguo());