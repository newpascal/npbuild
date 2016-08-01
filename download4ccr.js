const download = require('download');
const fs = require('fs');
const unzip = require('unzip');

download('https://github.com/newpascal-ccr/mORMot/zipball/heads/master').pipe(fs.createWriteStream('mORMot.zip'))
  .on('close', function () { 
    fs.createReadStream('mORMot.zip').pipe(unzip.Extract({ path: 'mORMot' }))
      .on('close', function () { 
        fs.renameSync('mORMot/' + fs.readdirSync('mORMot'), 'mORMot/latest'); 
      });
  });