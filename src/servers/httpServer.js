const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const requestContext = require('./midware/requestContext');
const httpServer = express();

httpServer.use(requestContext.middleware());
httpServer.use(bodyParser.urlencoded({ extended: true }));
httpServer.use(bodyParser.json({ limit: '2kb' }));
httpServer.use(compression());

httpServer.listen(3000, () => {
    console.log(
        '========================================= Servidor Rodando... ===================================================='
    );
});

module.exports = httpServer;
