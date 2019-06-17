var nconf = require('../node_modules/nconf');

nconf.argv().env();
nconf.file('defaults', {
    file: process.cwd() + '/src/appConfig.json'
});

module.exports = nconf;
