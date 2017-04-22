require('dotenv').config()
var port = process.env.PORT || 5000
var express = require('express')
var app = express()
var SpotifyWebApi = require('spotify-web-api-node');

const spotifyRef = () => {
	return new SpotifyWebApi({
		clientId : process.env.SPOTIFY_CLIENT_ID,
		clientSecret : process.env.SPOTIFY_CLIENT_SECRET,
		redirectUri : process.env.SPOTIFY_REDIRECT_URI
	});
}

app.use(express.static(__dirname + '/dist'))

app.get('/', function(req, res, next) {
	res.sendFile(__dirname + '/index.html')
})

app.get('/search', function(req, res, next) {
	res.sendFile(__dirname + '/search.html')
})

app.get('/auth', function(req, res, next) {
	var scopes = ['user-read-private', 'user-read-recently-played']
	var authorizeURL = spotifyRef().createAuthorizeURL(scopes);
	return res.redirect(authorizeURL)
})

app.get('/callback', function(req, res, next) {
	if (req.query.code) {
		var code = req.query.code
		var spotify = spotifyRef()
		spotify.authorizationCodeGrant(code).then(function(data) {

			spotify.setAccessToken(data.body['access_token']);
			spotify.setRefreshToken(data.body['refresh_token']);

			return res.redirect('/?access_token='+data.body['access_token'])

		}, function(err) {
			return res.redirect('/?error='+err);
		});
	} else {
		return res.redirect('/')		
	}
})



app.listen(port, function() {
	console.log(`App running at http://localhost:${port}`);
})