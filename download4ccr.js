const GitHubApi = require("github");
const download = require('download');
const fs = require('fs');
const unzip = require('unzip');
const execFile = require('child_process').execFile;

const github = new GitHubApi({
    // optional
    protocol: "https",
    host: "api.github.com",
    timeout: 5000,
    headers: {
        "user-agent": "NewPascal-App"
    }
});

download('https://github.com/newpascal-ccr/mORMot/zipball/heads/master').pipe(fs.createWriteStream('mORMot.zip'))
  .on('close', function () { 
    fs.createReadStream('mORMot.zip').pipe(unzip.Extract({ path: 'mORMot' }))
      .on('close', function () { 
        fs.renameSync('mORMot/' + fs.readdirSync('mORMot'), 'mORMot/latest'); 
      });
  });

download('https://github.com/newpascal-ccr/generics.collections/zipball/heads/master').pipe(fs.createWriteStream('generics.collections.zip'))
  .on('close', function () { 
    fs.createReadStream('generics.collections.zip').pipe(unzip.Extract({ path: 'generics.collections' }))
      .on('close', function () { 
        fs.renameSync('generics.collections/' + fs.readdirSync('generics.collections'), 'generics.collections/latest'); 
      });
  });
