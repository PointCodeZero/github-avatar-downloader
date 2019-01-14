const request = require('request');

function getRepoContributors(repoOwner, repoName, cb) {
  var url = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;
  request(url, (err, res, body) => {
    cb(err, body)
  });
}

console.log('Welcome to the GitHub Avatar Downloader!');
// getRepoContributors("jquery", "jquery")



