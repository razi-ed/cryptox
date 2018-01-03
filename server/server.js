const express = require('express')

const app = express()

const routes= require('./routes/api')
const auth= require('./routes/auth')


app.use(routes)
app.use("/auth",auth)
app.listen(process.env.port || 6000, function() {
  console.log('now listening for requests')
})
