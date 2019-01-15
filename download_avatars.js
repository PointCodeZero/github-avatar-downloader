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

function getAllUserAvatars(err, data) {
  data.forEach((user) => console.log(user.avatar_url));
}

function downloadImageByURL(url, filePath) {
  request(url)
    .on('error', (err) => {
      throw err;
    })
    .pipe(fs.createWriteStream(filePath));
}

// console.log('Welcome to the GitHub Avatar Downloader!');
// getRepoContributors("jquery", "jquery", getAllUserAvatars)
// downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg");


