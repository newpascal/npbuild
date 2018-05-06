const GitHubApi = require("@octokit/rest");
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

github.repos.getLatestRelease({owner:'newpascal',repo:'freepascal'},function(err,res){
  download(res.data.assets[0].browser_download_url).pipe(fs.createWriteStream('fpc.zip'))
  .on('close', function () {
    fs.createReadStream('fpc.zip').pipe(unzip.Extract({ path: '.' }));
  });
  download(res.data.assets[1].browser_download_url).pipe(fs.createWriteStream('fpcsrc.zip'))
  .on('close', function () {
    fs.createReadStream('fpcsrc.zip').pipe(unzip.Extract({ path: 'freepascal/fpcsrc' }));
  });
});

github.repos.getLatestRelease({owner:'newpascal',repo:'lazarus'},function(err,res){
  download(res.data.assets[0].browser_download_url).pipe(fs.createWriteStream('lazarus.zip'))
  .on('close', function () {
    fs.createReadStream('lazarus.zip').pipe(unzip.Extract({ path: 'freepascal' }));
  });
});
