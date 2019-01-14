const request = require('request'),
      secret  = require('./secret');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`,
    headers: {
      'User-Agent': 'request',
      secret
    }
  };

  request(options, (err, res, body) => {
    cb(err, body)
  });
}

console.log('Welcome to the GitHub Avatar Downloader!');
// getRepoContributors("jquery", "jquery")



