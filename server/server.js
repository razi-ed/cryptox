const express = require('express')
const Mongoose=  require('mongoose')
const bodyParser = require('body-parser');
const path= require('path')
const passport= require('passport')


const app = express()
Mongoose.Promise=global.Promise
//const routes= require('./routes/api')
const auth= require('./routes/auth')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//pasport init
app.use(passport.initialize());
//app.use(routes)
app.use(express.static(path.join(__dirname, '../dist/')));
app.use("/auth",auth)

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

Mongoose
  .connect(process.env.DB_HOST ||'mongodb://localhost/cryptox',{
    useMongoClient:true
  })

Mongoose
  .connection('once',()=>console.log('copnnected to db'))
  .on('error',(e)=>console.log('error connectin to db',e))


app.listen(process.env.port || 5000, function() {
  console.log('now listening for requests in port 5000  and please start `npm run watch` for frontend live reload')
})
