const mongoose = require('mongoose');

const matchSchema = mongoose.Schema({
    senderid:String,
    receiverid:String,
    senderlike:Boolean,
    receiverlike:Boolean,
})

module.exports = mongoose.model("Match",matchSchema);