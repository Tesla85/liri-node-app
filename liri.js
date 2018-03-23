require("dotenv").config();
var request = require("request");
var keys = require("./keys.js");
var twitter = require("twitter");
var spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


var songInfo = data
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});


var movieName = process.argv[2];
for(i = 3; process.argv[i]; i++){
  movieName += "+" + process.argv[i]; 
}
request("http://www.omdbapi.com/?i=" + movieName + "tt3896198&apikey=fc0cb27f", function(error, response, body) { 

if (!error && response.statusCode === 200) {

    // Parse the body of the site and recover just the imdbRating
    // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
    console.log(JSON.parse(body).Year);
  }
});

