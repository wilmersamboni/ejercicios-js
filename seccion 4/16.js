const mezclarConfigs =(defaults, overrides)=> {
    return { ... defaults, ...overrides}

}
const defaults= {modo:"oscuro", idioma:"es",notificaciones: true, almacenamiento:false}
const overrides={ idioma:"en", almacenamiento:true}
console.log(mezclarConfigs(defaults, overrides))