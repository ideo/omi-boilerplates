# Spotify App

Simple web app showing how to search spotify and authenticate a user.   

Create a [Spotify App](https://developer.spotify.com) and fill out the `.env` file   
```
SPOTIFY_CLIENT_ID="*******"
SPOTIFY_CLIENT_SECRET="*******"
SPOTIFY_REDIRECT_URI="http://localhost:5000/callback"
```

## Build
```
# install dependencies
npm install

#start the server
npm start
```

## Spotify web api
https://github.com/JMPerez/spotify-web-api-js

## Routes
`/`   
Basic auth for a spotify user grabs their recently played music.

`/search`   
Make a search request for album

`/auth`      
redirect to allow access to spotify account

`/callback`        
Token exchange for authentication
