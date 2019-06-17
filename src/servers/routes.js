const express = require('express');
const httpServer = require('./httpServer');

const usuarios = require('../routes/usuarios');

httpServer.use('/usr', usuarios);

httpServer.use((err, req, res, next) => {
    console.log('com err rota não encontrada');
});

httpServer.use((req, res, next) => {
    console.log('sem err rota não encontrada');
    res.statusCode = 404;
    res.end();
});
