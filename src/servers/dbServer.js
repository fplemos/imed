const mySqlServer = require('investira.server.sdk').mySqlServer;
const mySqlServerConfig = require('../appConfig').get('mysql');

const dbServer = {};

module.exports = mySqlServer(dbServer, {
    product: 'mysql',
    host: mySqlServerConfig.host || 'localhost',
    port: mySqlServerConfig.port || 330606,
    database: mySqlServerConfig.database,
    user: mySqlServerConfig.user,
    password: mySqlServerConfig.password,
    connectTimeout: mySqlServerConfig.connectTimeout || 10000,
    maxConnection: mySqlServerConfig.maxConnection || 30000,
    poolSize: mySqlServerConfig.poolSize || 15,
    queueTimeout: mySqlServerConfig.queueTimeout || 6000
});
