const request = require('request');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'request',
      Authorization: 'token 98569aac26ea6b58d064ff859813591bf23e64bd'
    }
  };

  request(url, (err, res, body) => {
    cb(err, body)
  });
}

console.log('Welcome to the GitHub Avatar Downloader!');
// getRepoContributors("jquery", "jquery")



