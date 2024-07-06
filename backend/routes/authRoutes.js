const express = require("express");
const passport = require("passport");
const config = require("../config/configs");
const { Strategy: InstagramStrategy } = require("passport-instagram");
const { Strategy: TwitterStrategy } = require("passport-twitter");
const { Strategy: FacebookStrategy } = require("passport-facebook");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const session = require("express-session");
const router = express.Router();

router.use(
  session({
    secret: config.JWT_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: process.env.NODE_ENV === "production" },
  })
);

router.use(passport.initialize());
router.use(passport.session());

const handleAuth = (accessToken, refreshToken, profile, done) => {
  // Here you should find or create a user in your database
  // For now, we'll just pass the profile
  done(null, profile);
};

passport.use(
  new InstagramStrategy(
    {
      clientID: config.INSTAGRAM_CLIENT_ID,
      clientSecret: config.INSTAGRAM_CLIENT_SECRET,
      callbackURL: config.BASE_URL + "/auth/instagram/callback",
    },
    handleAuth
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: config.TWITTER_CONSUMER_KEY,
      consumerSecret: config.TWITTER_CONSUMER_SECRET,
      callbackURL: config.BASE_URL + "/auth/twitter/callback",
    },
    handleAuth
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: config.FACEBOOK_APP_ID,
      clientSecret: config.FACEBOOK_APP_SECRET,
      callbackURL: config.BASE_URL + "/auth/facebook/callback",
    },
    handleAuth
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: config.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE_CLIENT_SECRET,
      callbackURL: `${config.BASE_URL}/api/auth/youtube/callback`,
      scope: [
        "profile",
        "email",
        "https://www.googleapis.com/auth/youtube.readonly",
      ],
    },
    handleAuth
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

const handleAuthCallback = (platform) => (req, res) => {
  const userData = JSON.stringify(req.user);
  res.redirect(
    `${config.CLIENT_URL}/api/auth/${platform}/success?user=${encodeURIComponent(userData)}`
  );
};

router.get("/auth/instagram", passport.authenticate("instagram"));
router.get(
  "/auth/instagram/callback",
  passport.authenticate("instagram", { failureRedirect: "/auth/failure" }),
  handleAuthCallback("instagram")
);

router.get("/auth/twitter", passport.authenticate("twitter"));
router.get(
  "/auth/twitter/callback",
  passport.authenticate("twitter", { failureRedirect: "/auth/failure" }),
  handleAuthCallback("twitter")
);

router.get("/auth/facebook", passport.authenticate("facebook"));
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/auth/failure" }),
  handleAuthCallback("facebook")
);

// YouTube routes
router.get("/auth/youtube", (req, res, next) => {
  console.log("Hitting /auth/youtube route");
  passport.authenticate("google", {
    scope: [
      "profile",
      "email",
      "https://www.googleapis.com/auth/youtube.readonly",
    ],
  })(req, res, next);
});

router.get(
  "/auth/youtube/callback",
  (req, res, next) => {
    console.log("Hitting /auth/youtube/callback route");
    passport.authenticate("google", { failureRedirect: "/auth/failure" })(
      req,
      res,
      next
    );
  },
  handleAuthCallback("youtube")
);

router.get("/auth/failure", (req, res) => {
  console.log("Authentication failed");
  res.redirect("influmart://auth/failure");
});

module.exports = router;
