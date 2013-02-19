var fs = require('fs');

fs.mkdirSync('conf');
fs.createReadStream('./../config/env.json').pipe(fs.createWriteStream('conf/env.json'));
fs.createReadStream('./../config/env.js').pipe(fs.createWriteStream('conf/env.js'));

console.log("Done. Now run 'npm install nconf -save");