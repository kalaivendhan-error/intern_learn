const mongoose = require('mongoose')

const date =new mongoose.Schema({
    userName:{type: String, require: true},
    password:{type: String, require: true}
},{timestamps:true})

const user = mongoose.model('Login data', date)
module.exports=user


// const mongoose =require('mongoose')
// const userSchema= new mongoose.Schema({
//     name: {type: String, require: true},
//     email: {type: String, require: true},
//     phoneNo: {type: Number, require: true},
// },{timestamps : true})

// const users= mongoose.model('users', userSchema)
// module.exports=users