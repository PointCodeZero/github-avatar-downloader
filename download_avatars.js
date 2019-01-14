// const request = require('request'),
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

console.log('Welcome to the GitHub Avatar Downloader!');
getRepoContributors("jquery", "jquery", getAllUserAvatars)



