const dbServer = require('../servers/dbServer');
const crudUsuario = require('../cruds/crudUsuario');
dbServer
    .getConnection()
    .then(rCN => {
        return Promise.all([rCN, dbServer.startTransaction(rCN)]);
    })
    .then(([rCN, rUsuario]) => {
        const xUsuario = {
            nome: 'Fabios Ux',
            aniversario: new Date()
        };
        return Promise.all([rCN, crudUsuario.add(rCN, xUsuario)]);
    })
    .then(([rCN, rUsuario]) => {
        return Promise.all([
            rCN,
            crudUsuario.modify(
                rCN,
                { nome: 'Fabio_Uchoa' },
                { usuario_id: rUsuario.usuario_id }
            )
        ]);
    })
    .then(([rCN, rUsuario]) => {
        return Promise.all([rCN, dbServer.endTransaction(rCN, false)]);
    })
    .then(([rCN, rUsuario]) => {
        return dbServer.closeConnection(rCN);
    })
    .catch(error => {
        console.log(error);
    });
