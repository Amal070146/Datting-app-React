const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    senderid:String,
    receiverid:String,
    message:String,
})

module.exports = mongoose.model("Message",messageSchema);