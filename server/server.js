const express = require('express')

const app= express()

const routes= require('./routes/api')


app.use(routes)

app.listen(process.env.port || 6000, function() {
  console.log('now listening for requests')
})
