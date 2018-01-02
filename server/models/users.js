const mongoose= require('mongoose');
const Schema= mongoose.Schema

const userSchema= new Schema({
//tommorow's task
})

module.exports=mongoose.model("user",userSchema)