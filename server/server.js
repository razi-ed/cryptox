const express = require('express')
const Mongoose=  require('mongoose')
const app = express()
const path= require('path')
Mongoose.Promise=global.Promise
//const routes= require('./routes/api')
const auth= require('./routes/auth')


//app.use(routes)
app.use(express.static(path.join(__dirname, '../dist/')));
app.use("/auth",auth)

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

Mongoose.connect(process.env.DB_HOST ||'mongodb://localhost/cryptox',{
  useMongoClient:true
}).then(()=>{
  app.listen(process.env.port || 5000, function() {
    console.log('now listening for requests in port 5000  and please start `npm run watch` for frontend live reload')
  })
})
.catch(e=>console.log(e))
