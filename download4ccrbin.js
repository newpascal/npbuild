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

github.repos.getLatestRelease({user:'newpascal-ccr',repo:'mORMot'},function(err,res){
  download(res.assets[0].browser_download_url).pipe(fs.createWriteStream('sqlite3fpc.zip'))
  .on('close', function () {
    fs.createReadStream('sqlite3fpc.zip').pipe(unzip.Extract({ path: 'newpascal/ccr/mORMot' }));
  });
});
