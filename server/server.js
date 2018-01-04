const express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const googleAuthRoutes = require('./routes/auth/google-auth-routes');
const postGoogleRoutes = require('./routes/auth/post-google-auth');
const passportSetup = require('./config/passport-config');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');


const app = express()
Mongoose.Promise = global.Promise;
//const routes= require('./routes/api')
const auth = require('./routes/auth');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.keys]
}));

//pasport init
app.use(passport.initialize());
app.use(passport.session());
//app.use(routes)
app.use(express.static(path.join(__dirname, '../dist/')));
app.use("/auth", auth)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});


app.use('/auth', googleAuthRoutes);

Mongoose.connect(process.env.DB_HOST || keys.DB.URI, {
    useMongoClient: true
  }).then(() => {
    app.listen(process.env.port || 5000, function() {
      console.log('now listening for requests in port 5000  and please start `npm run watch` for frontend live reload')
    })
  })
  .catch(e => console.log(e))