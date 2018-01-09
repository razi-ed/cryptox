const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('../../../config/googleAuth')
const User = require('../../../models/Users');


// serializing user and passing to cookie then to server
passport.serializeUser((user, done) => {
  done(null, user.email);
});

passport.deserializeUser((email, done) => {
  User.findOne({email: email})
  .then((user )=> {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: keys.ID,
  clientSecret: keys.Secret,
  callbackURL: keys.URL,
}, (accessToken, refreshToken, profile, done) => {
  // passport callback function to be fired
  // after getting encoded end user details
  // at /auth/google/redirect routes
  User.findOne({email: profile.emails[0].value})
  .then((currentUser) => {
      if (currentUser) {
        // already a USER
        done(null, currentUser);
      } else {
        // if not , create account
        new User({
          name: profile.displayName,
          googleID: profile.id,
          email: profile.emails[0].value,
          avatar: profile._json.image.url,
        }).save().then((newUser) => {
          done(null, newUser);
        });
      }
    });
}));
