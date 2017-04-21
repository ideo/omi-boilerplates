require('dotenv').config()
module.exports = {
	NODE_ENV: '"production"',
	APP_NAME: `"${process.env.APP_NAME}"`,
	FIREBASE_API_KEY: `"${process.env.FIREBASE_API_KEY}"`,
	FIREBASE_AUTH_DOMAIN: `"${process.env.FIREBASE_AUTH_DOMAIN}"`,
	FIREBASE_PROJECT_ID:  `"${process.env.FIREBASE_PROJECT_ID}"`,
	FIREBASE_DATABASE_URL: `"${process.env.FIREBASE_DATABASE_URL}"`,
	FIREBASE_STORAGE_BUCKET: `"${process.env.FIREBASE_STORAGE_BUCKET}"`,
	FIREBASE_MESSAGE_SENDER_ID: `"${process.env.FIREBASE_MESSAGE_SENDER_ID}"`
}
