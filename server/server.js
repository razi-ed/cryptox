const express = require('express')
const Mongoose=  require('mongoose')
const bodyParser = require('body-parser');
const path= require('path')
const passport= require('passport')

const auth= require('./routes/auth')
const frontend= require('./routes/frontend')

const app = express()
Mongoose.Promise=global.Promise
//const routes= require('./routes/api')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//pasport init
app.use(passport.initialize());
//app.use(routes)
app.use(express.static(path.join(__dirname, '../dist/')));
app.use("/auth",auth)
app.use(frontend)

Mongoose
  .connect(process.env.DB_HOST ||'mongodb://localhost/cryptox',{
    useMongoClient:true
  })

Mongoose
  .connection
  .once('once',()=>console.log('copnnected to db'))
  .on('error',(e)=>console.log('error connectin to db',e))


app.listen(process.env.port || 5000, function() {
  console.log('now listening for requests in port 5000')
})
