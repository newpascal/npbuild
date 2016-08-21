const GitHubApi = require("github");
const download = require('download');
const fs = require('fs');
const unzip = require('unzip');

const github = new GitHubApi({
    // optional
    protocol: "https",
    host: "api.github.com",
    timeout: 5000,
    headers: {
        "user-agent": "NewPascal-App"
    }
});

const github2 = new GitHubApi({
    // optional
    protocol: "https",
    host: "api.github.com",
    timeout: 5000,
    headers: {
        "user-agent": "NewPascal-App"
    }
});

github.repos.getLatestRelease({user:'dathox',repo:'newpascal'},function(err,res){
  download(res.assets[0].browser_download_url).pipe(fs.createWriteStream('fpc.zip'))
  .on('close', function () {
    fs.createReadStream('fpc.zip').pipe(unzip.Extract({ path: '.' }));
  });
  download(res.assets[1].browser_download_url).pipe(fs.createWriteStream('fpcsrc.zip'))
  .on('close', function () {
    fs.createReadStream('fpcsrc.zip').pipe(unzip.Extract({ path: 'newpascal/fpcsrc' }));
  });
});

github2.repos.getLatestRelease({user:'dathox',repo:'sparta'},function(err,res){
  download(res.assets[0].browser_download_url).pipe(fs.createWriteStream('sparta.zip'))
  .on('close', function () {
    fs.createReadStream('sparta.zip').pipe(unzip.Extract({ path: 'newpascal' }));
  });
});
