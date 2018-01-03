const express = require('express')
const Mongoose=  require('mongoose')
const app = express()
Mongoose.Promise=global.Promise
//const routes= require('./routes/api')
const auth= require('./routes/auth')


//app.use(routes)


Mongoose.connect(process.env.DB_HOST ||'mongodb://localhost/cryptox',{
  useMongoClient:true
}).then(()=>{
  app.use("/auth",auth)
  app.listen(process.env.port || 5000, function() {
    console.log('now listening for requests')
  })
})
.catch(e=>console.log(e))
