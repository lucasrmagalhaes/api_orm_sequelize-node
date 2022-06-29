const database = require('../models');

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo;
    }

    async pegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll();
    }

    async pegaUmRegistro() {
        return database[this.nomeDoModelo].findOne();
    }

    
}

module.exports = Services;