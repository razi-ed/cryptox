const express = require('express')
const Mongoose=  require('mongoose')
const bodyParser = require('body-parser');
const path= require('path')
const passport= require('passport')

const auth= require('./routes/auth')
//key
process.env.JWT_KEY="587b2cc7-5a21-447f-8aef-28c2857a5db6"
const app = express()
Mongoose.Promise=global.Promise



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//pasport init
app.use(passport.initialize());
require('./config/passport')(passport)
//app.use(routes)
app.use(express.static(path.join(__dirname, '../dist/')));
app.use("/auth",auth)

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../dist/index.html'))
})



Mongoose
.connect(process.env.DB_HOST ||'mongodb://localhost/cryptox',{
  useMongoClient:true
}).then(()=>{
  app.listen(process.env.port || 5000, function() {
    console.log('now listening for requests in port 5000  and please start `npm run watch` for frontend live reload')
  })
})
.catch(e=>console.log(e))
