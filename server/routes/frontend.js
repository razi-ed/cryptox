const app= require('express')();
const path = require('path');

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../../dist/index.html'))
});

module.exports = app;
