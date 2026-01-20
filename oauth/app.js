import dotenv from "dotenv";
dotenv.config();

import express from "express";

import session from "express-session";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//!@ redis db
app.use(
  session({
    secret: process.env.SESSION_SECRET_KEY, //? to generate tokens
    resave: false, //? to avoid creating new session every request
    saveUninitialized: false, //? create session only when we have (user details)
  }),
);
//! we are storing some data in session (ram for temporary data)

app.use(passport.initialize());
//! this middleware will attach authentication related methods to every req
//? req.login, req.isAuthenticated, req.logout
app.use(passport.session());
//! this will enable persistent login session by restoring user object from session

//! serialize and deserialize user
passport.serializeUser((user, done) => {
  console.log(user);
  done(null, user);
});
//! this, will decide what user data we need to store in session

passport.deserializeUser((user, done) => {
  done(null, user);
});
//! this will decide what user data we need to attach to req oject

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:9000/auth/google/callback",
    },
    (accessToken, refreshToken, user, done) => {
      console.log("user: ", user);
      console.log("refreshToken: ", refreshToken);
      console.log("accessToken: ", accessToken);

      done(null, user);
    },
  ),
);

app.get("/login", (req, res) => {
  res.send('<a href="/auth/google">Login with Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
);
 
app.get(
  "/auth/google/callback", //? endpoint
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.json({
      success: true,
      message: "user logged in",
      user: req.user,
    });
  },
);

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running");
});
