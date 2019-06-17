const requestContext = require('investira.server.sdk').requestContext;
const dbServer = require('../dbServer');

module.exports = new requestContext(dbServer);
