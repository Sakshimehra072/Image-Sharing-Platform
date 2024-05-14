// // Google API(client- secret)

require('dotenv').config();

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
// const redirectUri = process.env.REDIRECT_URI;

console.log(`Google Client ID: ${googleClientId}`);
console.log(`Google Client Secret: ${googleClientSecret}`);
// console.log(`Redirect URI: ${redirectUri}`);
