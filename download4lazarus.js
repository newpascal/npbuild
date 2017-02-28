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

github.repos.getLatestRelease({owner:'newpascal',repo:'freepascal'},function(err,res){
  download(res.data.assets[0].browser_download_url).pipe(fs.createWriteStream('fpc.zip'))
  .on('close', function () {
    fs.createReadStream('fpc.zip').pipe(unzip.Extract({ path: '.' }))
      .on('close', function () {
        execFile(process.cwd() + '\\freepascal\\configure.bat', [], {cwd: process.cwd() + '\\freepascal'});
      });
  });
});