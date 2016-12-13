var axios = require('axios')

var id = "GITHUB_API_KEY"
var sec = "GITHUB_SECRET_KEY"
var param = "?client_id=" + id + "&client_secret=" + sec

function getUserInfo(username) {
  // axios.get returns a "promise"
  return axios.get('https://api.github.com/users/' + username)

  // If we run out of free api calls use thi->
  //return axios.get('https://api.github.com/users/' + username + param)
}

var githubHelpers = {

  // this function returns what axis.all gets us, which is a promise
  // so whoever calls getPlayersInfo should wait for promise to get delivered and afterwards call the "then" function
  getPlayersInfo(players) {
    // loop over all users in players array
    // for each user, get a promise from axios
    // axios.all takes in an array of promises as argument
    // axios.all waits for all promises to be delivered and afterwards calls the "then" function
    return axios.all(players.map(function(username){
      return getUserInfo(username)
    }))
    .then(function(info){
      return info.map(function(user){
        return user.data
      })
    })
    .catch(function(err){
      console.warn("error in getPlayersInfo" + err)
    })
  }

};

module.exports = githubHelpers