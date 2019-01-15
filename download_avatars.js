const request = require('request'),
      fs      = require('fs'),
      secret  = require('./secret');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${secret.GITHUB_TOKEN}`
    }
  };

  request(options, (err, res, body) => {
    var data = JSON.parse(body);
    cb(err, data);
  });
}

function urlAndFilePathGenerator(err, data) {
  data.forEach((user) => {
    downloadImageByURL(user.avatar_url, `avatars/${user.login}.jpg`);
  });
}

function downloadImageByURL(url, filePath) {
  request(url)
    .on('error', (err) => {
      throw err;
    })
    .pipe(fs.createWriteStream(filePath))
    .on('finish', () => console.log('Requested completed!'));
}

console.log('Welcome to the GitHub Avatar Downloader!');
getRepoContributors("jquery", "jquery", urlAndFilePathGenerator)



