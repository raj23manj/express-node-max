const path = require('path');

//get the parent directory, process is global
// process.mainModule.filename is responsible to return the finla name that is responsible for running this app
module.exports = path.dirname(process.mainModule.filename);