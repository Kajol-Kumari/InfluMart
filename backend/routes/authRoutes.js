const express = require('express');
const passport = require('passport');
const config = require("../config/configs");
const { Strategy: InstagramStrategy } = require('passport-instagram');
const { Strategy: TwitterStrategy } = require('passport-twitter');
const { Strategy: FacebookStrategy } = require('passport-facebook');
const { Strategy: GoogleStrategy } = require('passport-google-oauth20');
const session = require('express-session');
const router = express.Router();

// Session configuration
router.use(session({
  secret: config.JWT_SECRET_KEY, // Change to a secure, random secret for production
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production' }
}));

// Initialize Passport and restore authentication state, if any, from the session
router.use(passport.initialize());
router.use(passport.session());

// Instagram Strategy
passport.use(new InstagramStrategy({
  clientID: config.INSTAGRAM_CLIENT_ID,
  clientSecret: config.INSTAGRAM_CLIENT_SECRET,
  callbackURL: config.BASE_URL + '/auth/instagram/callback'
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

// Twitter Strategy
passport.use(new TwitterStrategy({
  consumerKey: config.TWITTER_CONSUMER_KEY,
  consumerSecret: config.TWITTER_CONSUMER_SECRET,
  callbackURL: config.BASE_URL + '/auth/twitter/callback'
}, (token, tokenSecret, profile, done) => {
  console.log("Token:", token);
  console.log("Token Secret:", tokenSecret);
  console.log("Profile:", profile);
  done(null, profile);
}));

// Facebook Strategy
passport.use(new FacebookStrategy({
  clientID: config.FACEBOOK_APP_ID,
  clientSecret: config.FACEBOOK_APP_SECRET,
  callbackURL: config.BASE_URL + '/auth/facebook/callback'
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

// YouTube (Google) Strategy
passport.use(new GoogleStrategy({
  clientID: config.GOOGLE_CLIENT_ID,
  clientSecret: config.GOOGLE_CLIENT_SECRET,
  callbackURL: config.BASE_URL + '/auth/youtube/callback',
  scope: ['profile', 'email', 'https://www.googleapis.com/auth/youtube.readonly']
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Instagram routes
router.get('/auth/instagram', passport.authenticate('instagram'));
router.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/' }), (req, res) => {
  res.redirect(`influmart://auth/instagram/success?user=${JSON.stringify(req.user)}`);
});

// Twitter routes
router.get('/auth/twitter', passport.authenticate('twitter'));
router.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/' }), (req, res) => {
  res.redirect(`influmart://auth/twitter/success?user=${JSON.stringify(req.user)}`);
});

// Facebook routes
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
  res.redirect(`influmart://auth/facebook/success?user=${JSON.stringify(req.user)}`);
});

// YouTube routes
router.get('/auth/youtube', passport.authenticate('google', { scope: ['profile', 'email', 'https://www.googleapis.com/auth/youtube.readonly'] }));
router.get('/auth/youtube/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect(`influmart://auth/youtube/success?user=${JSON.stringify(req.user)}`);
});

module.exports = router;
