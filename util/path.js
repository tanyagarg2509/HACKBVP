const path = require('path');

module.exports = path.dirname(process.mainModule.filename);
//sets path of the file calling for the first time that is app.js