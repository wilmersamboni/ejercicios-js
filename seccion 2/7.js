//tomamos como moneda base el dolar
const caja = {
    tasa:{
        dolar: 1,
        euro:1.8,
        cop: 0.0002
    },
    convertir(monto,de, a) {
        return monto * this.tasa[a] / this.tasa[de];
    },
    actualizarTasa (moneda, nuevaTasa) {
        this.tasa[moneda] = nuevaTasa;
    }
};
console.log(caja.convertir(100, 'dolar', 'euro')); 
caja.actualizarTasa('euro', 1.5);
console.log(caja.convertir(100, 'dolar', 'euro')); 

