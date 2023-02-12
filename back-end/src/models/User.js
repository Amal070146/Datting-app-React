const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email:String,
    password:String,
    name:String,
    photo:String,
    gender:String,
    birthdate:String,
    chosengender:String,
    showgender:Boolean,
    description:String,
})

module.exports = mongoose.model("User",userSchema);