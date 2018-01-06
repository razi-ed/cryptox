const express = require('express')
const Mongoose=  require('mongoose')
const bodyParser = require('body-parser');
const path= require('path')
const passport= require('passport')

<<<<<<< HEAD
const auth= require('./routes/auth')
const frontend= require('./routes/frontend')

||||||| merged common ancestors

=======
const auth= require('./routes/auth')
//key
process.env.JWT_KEY="587b2cc7-5a21-447f-8aef-28c2857a5db6"
>>>>>>> authentication
const app = express()
Mongoose.Promise=global.Promise
<<<<<<< HEAD
//const routes= require('./routes/api')
||||||| merged common ancestors
//const routes= require('./routes/api')
const auth= require('./routes/auth')
=======



>>>>>>> authentication
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//pasport init
app.use(passport.initialize());
require('./config/passport')(passport)
//app.use(routes)
app.use(express.static(path.join(__dirname, '../dist/')));
app.use("/auth",auth)
app.use(frontend)

<<<<<<< HEAD
Mongoose
  .connect(process.env.DB_HOST ||'mongodb://localhost/cryptox',{
    useMongoClient:true
||||||| merged common ancestors
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

Mongoose.connect(process.env.DB_HOST ||'mongodb://localhost/cryptox',{
  useMongoClient:true
}).then(()=>{
  app.listen(process.env.port || 5000, function() {
    console.log('now listening for requests in port 5000  and please start `npm run watch` for frontend live reload')
=======
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../dist/index.html'))
})



Mongoose
.connect(process.env.DB_HOST ||'mongodb://localhost/cryptox',{
  useMongoClient:true
}).then(()=>{
  app.listen(process.env.port || 5000, function() {
    console.log('now listening for requests in port 5000  and please start `npm run watch` for frontend live reload')
>>>>>>> authentication
  })

Mongoose
  .connection
  .once('once',()=>console.log('copnnected to db'))
  .on('error',(e)=>console.log('error connectin to db',e))


app.listen(process.env.port || 5000, function() {
  console.log('now listening for requests in port 5000')
})
