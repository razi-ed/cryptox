const express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const googleAuthRoutes = require('./routes/auth/google-auth-routes');
const postGoogleRoutes = require('./routes/auth/post-google-auth');
const passportSetup = require('./config/google-auth-config');
const mongoose = require('mongoose');
const keys = require('./config/keys/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

const auth = require('./routes/auth')
  //key
process.env.JWT_KEY = "587b2cc7-5a21-447f-8aef-28c2857a5db6"
const app = express()
Mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connect(process.env.DB_HOST || keys.DB.URI, {
  useMongoClient: true
}, () => {
  console.log('connected to mongoDB');
})

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.keys]
}));

//pasport init
app.use(passport.initialize());
app.use(passport.session());


//pasport init
app.use(passport.initialize());
require('./config/passport')(passport)
  //app.use(routes)
app.use(express.static(path.join(__dirname, '../dist/')));
app.use("/auth", auth)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
});

app.listen(process.env.port || 5000, () => {
  console.log('now listening for requests in port 5000  and please start `npm run watch` for frontend live reload')
})