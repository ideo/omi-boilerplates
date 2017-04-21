# vue-firebase-app

> Boilerplate for a vue and firebase app, auth, profiles, data

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# Firebase
You need to do a few things to get firebase setup. 
1. Create a firebase account
2. get your web credtions from the dashboard, set your var in `.env`.
3. Under authentication / sign-in-methods enable google. If you are depoying to Heroku you need to add that domain to the OAuth redirect domains list.

When a user first logs in a profile is create with this structure.

`/{app-name}/development/users/{id}`


# Deploy to Heroku
App is ready for Heroku deployment. All you need to do is set the `Config Vars` in the settings section of Heroku. 

**Example Vars**
```
APP_NAME="omi-vue-app"
FIREBASE_API_KEY="****"
FIREBASE_AUTH_DOMAIN="****"
FIREBASE_PROJECT_ID="****"
FIREBASE_DATABASE_URL="https://****.firebaseio.com"
FIREBASE_STORAGE_BUCKET="****.appspot.com"
FIREBASE_MESSAGE_SENDER_ID="****"
```
