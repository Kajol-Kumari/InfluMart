require('dotenv').config();

const dbConfig = {
  MONGO_DB_URL: process.env.MONGO_DB_URL,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  BASE_URL: process.env.BASE_URL,
  X_RAPIDAPI_KEY: process.env.X_RAPIDAPI_KEY,
  X_RAPIDAPI_HOST_INSTA: process.env.X_RAPIDAPI_HOST_INSTA,
  X_RAPIDAPI_HOST_YT: process.env.X_RAPIDAPI_HOST_YT,
  X_RAPIDAPI_HOST_FB: process.env.X_RAPIDAPI_HOST_FB,
  YT_ENDPOINT: process.env.YT_ENDPOINT,
  FB_ENDPOINT: process.env.FB_ENDPOINT,
  INSTA_ENDPOINT: process.env.INSTA_ENDPOINT,
};

module.exports = dbConfig;