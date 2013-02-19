var fs = require('fs');

fs.mkdirSync('config');
fs.createReadStream('./../config/env.json').pipe(fs.createWriteStream('config/env.json'));
fs.createReadStream('./../config/env.js').pipe(fs.createWriteStream('config/env.js'));

console.log("Done. Now run 'npm install nconf -save");