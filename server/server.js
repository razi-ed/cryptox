const express = require('express');
const Mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const webpack = require('webpack');
const auth = require('./routes/auth');
const orders= require('./routes/order');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const statement = require('./routes/accounts/accountStatements');
const balance = require('./routes/accounts/accountBalance');

const config = require('../client/webpack.config.js');
const passportConfig = require('./config/passport');

const app = express();
Mongoose.Promise = global.Promise;
const compiler = webpack(config);

const frontend = require('./routes/frontend');

// key
process.env.JWT_KEY = '587b2cc7-5a21-447f-8aef-28c2857a5db6';

app.use(
  webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      assets: false,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: false,
      errorDetails: false,
      warnings: false,
      publicPath: false,
    },
    })
);

app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// pasport init
app.use(passport.initialize());
// passport config
passportConfig(passport);


app.use(express.static(path.join(__dirname, '../dist/')));
app.use('/auth', auth);
app.use('/orders', orders);
app.use('/account', statement);
app.use('/account', balance);
app.use(frontend);

Mongoose
  .connect(process.env.DB_HOST || 'mongodb://localhost/cryptox', {
    useMongoClient: true,
  });

Mongoose
  .connection
  .once('once', () => console.log('copnnected to db'))
  .on('error', (e) => console.log('error connectin to db', e));


app.listen(process.env.port || 3000, function() {
  console.log('now listening for requests in port 5000');
});
