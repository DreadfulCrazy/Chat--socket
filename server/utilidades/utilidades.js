const crearMensaje = (nombre, mnensaje)=>{


    return {
        nombre,
        mnensaje,
        fechac: new Date().getTime()
    }
}

module.exports = {
    crearMensaje
}