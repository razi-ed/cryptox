const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys/keys')
const User = require('../models/users');

// console.log("from config pasport");

// serializing user and passing to cookie then to server
passport.serializeUser((user, done) => {
  done(null, user.uEmail);
})

passport.deserializeUser((email, done) => {
  User.findOne({ uEmail: email }).then(user => {
    done(null, user);
  })
})

passport.use(new GoogleStrategy({
  clientID: keys.ID,
  clientSecret: keys.Secret,
  callbackURL: keys.URL
}, (accessToken, refreshToken, profile, done) => {
  // passport callback function to be fired
  // after getting encoded end user details
  // at /auth/google/redirect routes
  User.findOne({ uEmail: profile.emails[0].value })
    .then((currentUser) => {
      if (currentUser) {
        //already a USER
        console.log("Logging in");
        done(null, currentUser);
      } else {
        //if not , create account
        let user={name: profile.displayName,
          googleID: profile.id,
          email: profile.emails[0].value,
          avatar: profile._json.image.url}
        console.log(user);
        // res.json(user)
        // .then(()=>done())
        done(null,user)
        // new User({
        //   name: profile.displayName,
        //   googleID: profile.id,
        //   email: profile.emails[0].value,
        //   avatar: profile._json.image.url
        // }).save().then((newUser) => {
        //   console.log("Account created.");
        //   done(null, newUser)
        // })
        // .catch(e=>console.log(e))
      }
    })
    // console.log(profile);
}))